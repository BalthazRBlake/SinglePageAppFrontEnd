Vue.component('employees', {
    props: {
        employees: {
            type: Array,
            requied: true
        }
    },
    template: `
    <div>
    <div class="table-responsive">
        <table class="table table-sm table-hover">
            <caption>List of employees</caption>
            <thead class="thead-light">
                <tr>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col">empId</th>
                    <th scope="col">empName</th>
                    <th scope="col">empActive</th>
                    <th scope="col">empDepartment</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody> 
                    <tr v-for="employee in employees" :key="employee.empId">

                        <td><button @click='triggerEmpDetails(employee)' class="btn btn-link">View</button></td>

                        <td><button @click='triggerEmpEdit(employee)' class="btn btn-link">Edit</button></td>

                        <th scope="row"> {{employee.empId}} </th>
                        <td > {{employee.empName}} </td>
                        <td v-if="employee.empActive"> Yes </td>
                        <td v-else class="bg-danger">No</td>
                        <td > {{employee.emp_dpId.dpName}} </td>

                        <td><button @click='triggerEmpDelete(employee.empId)' class="btn btn-link">Delete</button></td>
                    </tr>
            </tbody>
        </table>
    </div>
    
    </div>`,
    methods: {
        triggerEmpDetails(employee){
            this.$emit('show-details', employee)
        },
        triggerEmpEdit(employee){
            this.$emit('edit-emp', employee)
        },
        triggerEmpDelete(empId){
            this.$emit('delete-emp', empId)
        }
    }
})

Vue.component('pagesmenu', {
    props: {
        page: {
            type: Number,
            requied: true
        },
        pages: {
            type: Number,
            requied: true
        }
    },
    template: `
    <nav aria-label="Page navigation">
        <ul class="pagination pagination-sm">
            <li>
                <div class="form-group">
                <span class="badge badge-dark">Amount of results: </span>
                <select v-model.number="size" @change='change(1, size)'>
                    <option>5</option>
                    <option>10</option>
                    <option>25</option>
                    <option>50</option>
                    <option>100</option>
                </select>
                </div>
            </li>
            <li>&nbsp&nbsp&nbsp&nbsp</li>
            <!--li class="page-item">
                <a href="#" aria-label="Previous" class="page-link">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li-->
            <li v-for="page in pages" class="page-item">
                <button @click='change(page, size)' class="page-link">{{ page }} </button>
            </li>
            <!--li class="page-item">
                <a href="#" aria-label="Next" class="page-link">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li-->
        </ul>
    </nav>
    `,
    data(){
        return{
            size: 10
        }
    },
    methods: {
        change(page, size) {
            this.$emit('change-page', page, size)
        }
    }
})

Vue.component('employeeform', {
    props: {
        empedit: {
            type: Object,
            requied: true
        },
        departments: {
            type: Array,
            requied: true
        }
    },
    template: `
    <div id="form">
        <form action="#">
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">empName</label>
                <div class="col-sm-10">
                    <input type="text" v-model="empedit.empName" class="form-control">
                </div>
            </div>

            <div class="form-group row">
                <div class="col-sm-2">empActive</div>
                <div class="col-sm-10">
                    <div class="form-check">
                        <input type="checkbox" v-model="empedit.empActive" class="form-check-input">
                    </div>
                </div>
            </div>

            <div class="form-group row">
                    <label class="col-sm-4">empDepartment</label>
                    <select v-model="empedit.emp_dpId" class="custom-select col-sm-7">
                        <option v-for="department in departments" v-bind:value="department"> 
                            {{department.dpName}}
                        </option>
                    </select>
            </div>

        </form>

        <div id="formBtn" class="form-group row">
            <div class="col-sm-4">
                <button @click="updateEmployee(empedit)" class="btn btn-outline-primary">Update</button>
            </div>
            <div class="col-sm-4">
                <button class="btn btn-outline-dark">Cancel</button>
            </div>
            <div class="col-sm-4">
                <button class="btn btn-outline-success">Save New</button>
            </div>
        </div>
    </div>
    `,
    methods:{
        updateEmployee(empedit){
            
            axios
            .put('http://localhost:5000/spapp/emp/update/' + empedit.empId, {
                empId: empedit.empId,
                empName: empedit.empName,
                empActive: empedit.empActive,
                emp_dpId:{
                    dpId: empedit.emp_dpId.dpId,
                    dpName: empedit.emp_dpId.dpName
                }
            })
            .catch(error => console.log(error))
            //console.log(empedit)
        }
    }
})

let spapp = new Vue({
    el: '#spapp',
    data() {
        return{
        size: 10,
        page: 1,
        pages: null,
        totalEmp: null,
        employees: null,
        employeeDelete: null,
        empedit: {
            empId: 0,
            empName: '',
            empActive: false,
            emp_dpId: {
                dpId: 0,
                dpName: ''
            }
        },
        departments: null
        }
    },
    methods: {
        updatePage(page, size){     
            this.page = page
            this.size = size

            axios
            .get('http://localhost:5000/spapp/emp/paginated/' + this.page + '/' + this.size)
            .then(response => (this.employees = response.data))
            .catch(error => console.log(error))

            axios
            .get('http://localhost:5000/spapp/emp/pages')
            .then(response => (this.pages = Math.ceil( response.data / this.size )))
            .catch(error => console.log(error))
        },
        showEmpDetails(employee){
            this.employeeDelete = employee
        },
        clearDetails(){
            this.employeeDelete = null
        },
        editEmployee(employee){
            this.empedit = employee

            axios
            .get('http://localhost:5000/spapp/dep/all')
            .then(response => (this.departments = response.data))
            .catch(error => console.log(error.status))
            //console.log(this.empedit)
        },
        deleteEmployee(empId){
            
            axios
            .delete('http://localhost:5000/spapp/emp/delete/' + empId)
            .then(response => {
                //console.log(response);
                this.updatePage(this.page, this.size);
            })
            .catch(error => console.log(error))
        }
    },
    mounted(){
        this.updatePage(1, this.size)
        this.editEmployee(this.empedit)
    }
  })