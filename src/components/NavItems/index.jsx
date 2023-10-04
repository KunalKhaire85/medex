export const NavItems = () => {
    const products = [{
        id : 1,
        name : "PaceMaker",
        url : "pacemakers"
    },{
        id : 2,
        name : "DBS",
        url : "/dbs"
    },{
        id : 1,
        name : "SCS",
        url : "/scs"
    }];
    return(
        products.map((item,index) => {
            return ( <li class="nav-item">
            <a class="nav-link" key={index}  href={item.url}>{item.name}</a>
          </li>

            )
        })
    )
};