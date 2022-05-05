import React from 'react'

const ErrorMessage = ({children}) => {
  return (
    <div
    style={{width:"100%",padding:10,marginBottom:5,backgroundColor:"orangered",textAlign:'center',borderRadius:4,color:'white' }}
    >
        {children}
        </div>
  )
}

export default ErrorMessage