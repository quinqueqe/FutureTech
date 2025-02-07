export default function Card({ index, title, isActive, onTabClick }) {
    return (
        <li onClick={() => onTabClick(index)} className='asked-card'>
            <div className='asked-card-titleBtn'>
                <h5
                    className={
                        isActive
                            ? 'asked-card-title-active asked-card-title'
                            : 'asked-card-title'
                    }
                >
                    {title}
                </h5>
            </div>
            <p
                className={
                    isActive
                        ? 'asked-card-desc-active asked-card-desc'
                        : 'asked-card-desc'
                }
            >
                AI stands for Artificial Intelligence, which refers to the simulation of
                human intelligence in machines. It enables them to perform tasks like
                problem-solving, learning, and decision-making.
            </p>
        </li>
    );
}