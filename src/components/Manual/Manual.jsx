import style from './Manual.module.css';

import smile from '../../assets/smile.png';

const Manual = () => {
    return (
        <div className={style.wrapper} id='Manual'>
            <p className={style.title}>Инструкция</p>
            <div className={style.wrap}>
                <div className={style.manualWrap}>
                    <div className={style.videoDisplay}>
                        {/* Видеоинструкция */}
                        <iframe width="620" height="350" src="https://www.youtube.com/embed/mSCH3NVWyWo" title="Конкурс рисунков логотипа платформы инклюзивного просвещения" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                        <div className={style.buttonStyle}>
                            <a download="/static/media/color_logo.pdf" href="#">
                                <button>
                                    Скачать материал для конкурса
                                </button>
                            </a>
                            <a href="https://t.me/my_ravnye">
                                <button>
                                    Наш Телеграм-канал
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className={style.span}>
                        {/* Текстовое описание */}
                        <div>
                            <img src={smile} alt='Smile' />
                            <span>разрисуй ту сторону карточки, на которой изображён логотип</span>
                        </div>
                        <br></br>
                        <div>
                            <img src={smile} alt='Smile' />
                            <span>сфотографируй или отсканируй свой рисунок</span>
                        </div>
                        <br></br>
                        <div>
                            <img src={smile} alt='Smile' />
                            <span>отправь нам на почту <a href="mailto:zajigay-serdca@mail.ru">zajigay-serdca@mail.ru</a> с указанием имени, возраста и номера телефона или заполни гугл форму <a href='https://forms.gle/kYyYLhfvpqysy3Zq8'>https://forms.gle/kYyYLhfvpqysy3Zq8</a></span>
                        </div>
                    </div>
                </div>
                <div className={style.h4}>
                    <h4>Конкурс проводится с
                        <span> 20.03 </span>
                        по
                        <span> 20.04 </span>
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default Manual; 