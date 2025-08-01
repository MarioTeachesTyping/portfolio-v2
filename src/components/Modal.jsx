// ------------- //
// Modal Creator //
// ------------- //

export default function Modal({ children, onClose, pos = 'center' }) 
{
    return (
        <div>
            onClick={onClose}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background_color: 'rgba(0, 0, 0, 0.3)',
                display: 'flex',
                justify_content: 'center',
                align_items: pos,
            }}

            <div>
                onClick={(e) => e.stopPropagation()}
                style={{
                    position: 'relative',
                    bottom: 0,
                    background_color: 'transparent',
                    padding: '1rem',
                }}
            </div>

            <div>
                className='absolute text-[#d9d9d9] portrait:text-[2vh] portrait:top-[-2vh] portrait:md:text-[1.7vh] text-[1.7vh] md:top-[-4.5vh] lg:top-[-5vh]'
                style={{
                    transform: 'translateX(-50%)',
                    left: '51%',
                    opacity: '0.9',
                    pointer_events: 'none',
                }}
            </div>
            
            {children}

        </div>
    );
}