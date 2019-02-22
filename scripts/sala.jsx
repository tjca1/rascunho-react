import React from 'react'
import {filterChildren} from './utils/reactUtils'

export default props =>(

    <div>
       
        {filterChildren(props.children, props)}
         {console.log(JSON.stringify(
             React.Children.map(props.children,
                child => React.cloneElement(child, {...props})
               )

         )) }
    </div>

)