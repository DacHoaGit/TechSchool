import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ManagementView from '../views/ManagementView.vue'
import courses from '../components/Management/Courses/Courses.vue'
import classes from '../components/Management/Classes/classes.vue'
import teachers from '../components/Management/Teachers/teachers.vue'



const routes = [
    {
        path: '/register',
        name: 'register',
        component: RegisterView

    },
    {
        path: '/Login',
        name: 'login',
        component: LoginView
    },
    {
        path:'/management',
        name:'management',
        component: ManagementView,
        children:[
            {
                path: "courses",
                name: "courses",
                component:courses
            },
            {
                path: "courses/create",
                name: "courses-create",
                component:() => import ("../components/Management/Courses/create.vue")
            },
            {
                path: "classes",
                name: "classes",
                component:classes
            },
            {
                path: "classes/create",
                name: "classes-create",
                component:() => import ("../components/Management/Classes/create.vue")
            },
            {
                path: "teachers",
                name: "teachers",
                component:teachers
            },
            {
                path: "teachers/create",
                name: "teachers-create",
                component:() => import ("../components/Management/Teachers/create.vue")
            },
        ]
    }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router