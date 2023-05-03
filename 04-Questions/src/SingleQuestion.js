import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const SingleQuestion = ({id, title, info, activeId, toggleActiveId})=>{

    const isActive = activeId === id

return <article>
    <div className="question">
        <header>
            <h4>{title}</h4>
            <button className='btn' onClick={()=>{toggleActiveId(id)}}>
                <span>
                    {isActive? <AiOutlineMinus/> : <AiOutlinePlus/> }
                </span>
            </button>
        </header>
        {isActive ? <p>{info}</p> : ""}
    </div>
</article>
}

export default SingleQuestion