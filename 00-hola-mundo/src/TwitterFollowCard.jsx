export function TwitterFollowCard ({formatUserName,username, name, isFolllowing}) {
    const imgSrc = `https://unavatar.io/${username}`
 

    return (
    <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img 
            className='tw-followCard-avatar'
            alt = "Avatar de midu" src={imgSrc}/>
            <div className='tw-followCard-info'>
            <strong>{name}</strong>
            <span className='tw-followCard-info-username'>{formatUserName(username)}</span>
            </div>
        </header>

        <aside>
            <button className='tw-followCard-button'>
            Seguir
            </button>
        </aside>
    </article>

    )
}