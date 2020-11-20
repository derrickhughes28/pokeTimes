import React from 'react'

const Contact = (props) => {
   setTimeout(()=> {
       props.history.push('/about')
   }, 2000)
    return (
        <div className='container'>
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam distinctio minus debitis quo earum assumenda, vel voluptatem dolores dolore labore iure cum ducimus ad beatae perferendis nemo culpa modi corrupti accusamus dicta omnis incidunt possimus asperiores a. Temporibus delectus cupiditate laudantium quis ad fugiat voluptates blanditiis dolorem! Distinctio, officiis atque.</p>
        </div>
    )
}

export default Contact
