import React from 'react';
import classes from './AboutDoctor.module.scss';
import Slider from 'react-slick';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
};

const AboutDoctor = () => {
    return (
        <div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3702.082833624337!2d21.253794310226738!3d48.995974667784616!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDU5JzQ1LjMiTiAyMcKwMTUnMTQuMyJF!5e0!3m2!1sen!2sus!4v1599307355399!5m2!1sen!2sus"
                width="100%"
                height="350"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
            ></iframe>
            <div className={classes.Content}>
                <h3>Diabetologická ambulancia</h3>
                <p>
                    Ambulancia je zameraná na poskytovanie liečebnej a
                    preventívnej starostlivosti v odbore diabetológia.
                </p>
                <p>V ambulancii vykonávame:</p>
                <ul>
                    <li>
                        komplexné diabetologické vyšetrenie zamerané na
                        diagnostiku, liečbu a prevenciu
                    </li>
                    <li>
                        kontrolné diabetologické vyšetrenie za účelom indikácie
                        medikamentóznej liečby a potrebných doplňujúcich
                        vyšetrení
                    </li>
                    <li>
                        diabetologické vyšetrenie v tehotenstve - pri gestačnom
                        diabete
                    </li>
                    <li>špecializované krvné vyšetrenia</li>
                    <li>
                        posudkové diabetologické vyšetrenia zamerané na
                        posúdenie zdravotného stavu (sociálne, dôchodkové, iné)
                    </li>
                    <li>
                        edukáciu pacientov pri liečbe diabetu, nácviku práce s
                        inzulínovými perami, inzulínovými pumpami a glukomermi
                    </li>
                    <li>
                        edukácia pacientov o správnej životospráve a režime
                        diabetika
                    </li>
                </ul>
            </div>
            <div className={classes.SlickWrapper}>
                <div className={classes.SlickContent}>
                    <Slider {...settings}>
                        <div className={classes.SliderDiv}>
                            <img
                                src="http://www.medikard.sk/_uploads/gallery/8/b3a3af93e4.jpg"
                                alt=""
                            />
                        </div>
                        <div className={classes.SliderDiv}>
                            <img
                                src="http://www.medikard.sk/_uploads/gallery/8/1b9254b616.jpg"
                                alt=""
                            />
                        </div>
                        <div className={classes.SliderDiv}>
                            <img
                                src="http://www.medikard.sk/_uploads/gallery/8/53ffcdea4c.jpg"
                                alt=""
                            />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default AboutDoctor;
