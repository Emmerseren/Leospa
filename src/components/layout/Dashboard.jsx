import dashboardCss from "./dashboard.module.scss";
import { Link} from 'react-router-dom'


const Dashboard = ({children}) => {
 

    console.log(children);

    return(
    
        
        
        <div className={dashboardCss.dashboard}>
            <img src="/images/leaf.png" alt="" />
            <img className={dashboardCss.jasmine} src="/images/jasmine.png" alt="" />
            <img className={dashboardCss.china} src="/images/china-rose.png" alt="" />
<nav className={dashboardCss.dashboard__Menu}>
    <ul>
        <li ><Link to="/dashboard/hero">HERO</Link></li>
        <li ><Link to="/dashboard/about">ABOUT</Link></li>
        <li> <Link to="/dashboard/treatments">TREATMENTS </Link></li>
        <li> <Link to="/dashboard/recommendations">RECOMMENDATIONS </Link></li>
        <li> <Link to="/dashboard/team">TEAM </Link></li>
        <li> <Link  to="/dashboard/appointments">APPOINTMENTS </Link></li>
        <li> <Link to="/dashboard/footer">FOOTER </Link></li>
        
    </ul>
</nav>

<>
    {children}
</>

</div>

    );
}

export default Dashboard