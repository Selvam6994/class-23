import './App.css';
import Card from './card';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const data = [
    {
      pack : "Free",
      price : 0,
      features:[
        {
          list : "Single User",
          isEnable:true
        },
        {
          list : "5GB Storage",
          isEnable:true
        },
        {
          list :"Unlimited Public Projects",
          isEnable:true
        },
        {
          list : "Community Access",
          isEnable:true
        },
        {
          list :"Unlimited Private Projects",
          isEnable:false
        },
        {
          list : "Dedicated Phone Support",
          isEnable:false
        },
        {
          list : "Free Subdomain",
          isEnable:false
        },
        {
          list : "Monthly Status Reports",
          isEnable:false
        }
        
      ]
    },
    {
      pack : "PLUS",
      price : 9,
      features:[
        {
          list : "5 User",
          isEnable:true,
          isBold:true
        },
        {
          list : "50GB Storage",
          isEnable:true
        },
        {
          list :"Unlimited Public Projects",
          isEnable:true
        },
        {
          list : "Community Access",
          isEnable:true
        },
        {
          list :"Unlimited Private Projects",
          isEnable:true
        },
        {
          list : "Dedicated Phone Support",
          isEnable:true
        },
        {
          list : "Free Subdomain",
          isEnable:true
        },
        {
          list : "Monthly Status Reports",
          isEnable:false
        }
        
      ]
    },
    {
      pack : "PRO",
      price : 49,
      features:[
        {
          list : "Unlimited User",
          isEnable:true
        },
        {
          list : "150GB Storage",
          isEnable:true
        },
        {
          list :"Unlimited Public Projects",
          isEnable:true
        },
        {
          list : "Community Access",
          isEnable:true
        },
        {
          list :"Unlimited Private Projects",
          isEnable:true
        },
        {
          list : "Dedicated Phone Support",
          isEnable:true
        },
        {
          list : "Unlimited Free Subdomain",
          isEnable:true,
          isBold:true
        
        },
        {
          list : "Monthly Status Reports",
          isEnable:true
        }
        
      ]
    }
  ]
  return(
    <section className="pricing py-5">
  <div className="container">
    <div className="row">
     {
      data.map((item)=>{
        return <Card item={item}></Card>
      })
     }
      </div>
  </div>
</section>
  );   
};

export default App;
