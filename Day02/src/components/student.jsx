import { React} from 'react';

const StudentComp = (props)=>{
    console.log(props)
    if (props.list.length > 0) {
        const newsListElements = props.list.map((item) => {
            return (
                <div key={item.id}>
               <div className="divBottom">
                   <label className="cutomeTable h6">{item.name}</label>
                   <label className="cutomeTable h6">{item.age}</label>
               </div>
               
            </div>
           )
        })
        return (
            <div >
                {newsListElements}
            </div>
        )
    }
    else
        return <p>No elements available</p>
}
 
export default StudentComp;


