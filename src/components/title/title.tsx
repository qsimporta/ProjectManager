import React from 'react'
import "./title.sass"

const Title = props => {
 return (
     <h1 className={'title'}>{props.children}<span className={'line'}/></h1>
 )
}

export default Title
