import 'primereact/resources/themes/saga-blue/theme.css'
import'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import { Avatar } from 'primereact/avatar'
import { Button } from 'primereact/button'

function App() {
  const colors ={
    youtube: 'red',
    twitter: 'blue',
    github: 'green'
    }
  const data = {
    name: "Mihir Shetty",
    image: "https://twitter.com/Mihirpshetty.png",
    bio:"4th year ISE , canara engineering college",
    links: [
    {
      name: "My noob github",
      url: "https://github.com/MIMER17",
      icon: "github",
    },
    {
      name: "Follow mw on twitter",
      url: "https://twitter.com/Mihirpshetty",
      icon: "twitter",
    },
    {
      name: "SubScribe on my youtube channel",
      url: "https://www.youtube.com/channel/UCOP8ksoLP4UzYybO44WYGjA",
      icon: "youtube",
    }
  ]
  };
  return (
      <div className="p-m-4"> 
        <div className="p-d-flex p-jc-center p-ai-center">
        <Avatar image={data.image} size="xlarge" shape="circle"></Avatar>
        <h1 classname="p-m-2">{data.name}</h1>
        </div>
        <div className="p-d-flex p-jc-center p-ai-center">
          <p>{data.bio}</p>
        </div>
        <div className="p-d-flex p-jc-center p-ai-center">
          <div className="p-d-flex p-flex-column">
            {data.links.map((link) => (
            <Button 
              className="p-m-2 p-button-outlined"
              style={{ color: colors[link.icon] }}
            >
              <i className={`pi pi-${link.icon} p-px-3`}></i>
              {link.name}</Button>))}
          </div>
        </div>
      </div>
  );
}

export default App;
