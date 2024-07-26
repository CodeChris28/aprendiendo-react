import { useState } from "react"

export function TwitterFollowCard ({username, name, initialIsFollowing}) {
    const [isFolllowing, setisFolllowing] = useState(initialIsFollowing)
    
    const imgSrc = `https://unavatar.io/${username}`
    const text = isFolllowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFolllowing? 'tw-followCard-button is-following' : 'tw-followCard-button'
 
    const handleClick = () =>{
        setisFolllowing(!isFolllowing)
    }


    return (
    <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img 
            className='tw-followCard-avatar'
            alt = "Avatar de midu" src={imgSrc}/>
            <div className='tw-followCard-info'>
            <strong>{name}</strong>
            <span className='tw-followCard-info-username'>@{username}</span>
            </div>
        </header>

        <aside>
            <button className= {buttonClassName} onClick={handleClick}>
            <span className= 'tw-followCard-text'>{text}</span>
            <span className= 'tw-followCard-StopFollow'>Dejar de seguir</span>
            </button>
        </aside>
    </article>

    )
}