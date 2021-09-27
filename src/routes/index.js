import AboutPage from "../containers/HomeTemplate/AboutPage"
import HomePage from "../containers/HomeTemplate/HomePage"
import DetailMoviePage from "./../containers/HomeTemplate/DetailMoviePage"
import ListMoviePage from "../containers/HomeTemplate/ListMoviePage"
import Dashboard from "../containers/AdminTemplate/PageDashBoard"
import AddUser from "../containers/AdminTemplate/AddUserPage"
import HomeTemplate from "../containers/HomeTemplate"
import AdminTemplate from "../containers/AdminTemplate"
import HOC from "../containers/HomeTemplate/HOC/HOC"
import RenderPropsPage from "../containers/HomeTemplate/RenderPropsPage"
import HookPage from "../containers/HomeTemplate/HookPage"

const routeHome = [
  {
    exact: true,
    path: '/',
    component: HomePage
  }, {
    exact: false,
    path: '/about',
    component: AboutPage
  }, {
    exact: false,
    path: '/list-movie',
    component: ListMoviePage
  }, {
    exact: false,
    path: '/detail/:id',
    component: DetailMoviePage
  }, {
    exact: false,
    path: "/hoc",
    component: HOC
  }, {
    exact: false,
    path: "/render-props",
    component: RenderPropsPage
  }, {
    exact: false,
    path: "/hook",
    component: HookPage
  }

]
const routeAdmin = [
  {
    exact: false,
    path: '/dashboard',
    component: Dashboard
  }, {
    exact: false,
    path: '/add-user',
    component: AddUser
  }
]


export const renderRouteHome = () => {
  return routeHome.map((route, key) => {
    return <HomeTemplate key={key} exact={route.exact} path={route.path} Component={route.component} />
  })
}

export const renderRouteAdmin = () => {
  return routeAdmin.map((route, key) => {
    return <AdminTemplate key={key} exact={route.exact} path={route.path} Component={route.component} />
  })
}