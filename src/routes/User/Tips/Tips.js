import React from 'react';
import classes from './Tips.module.scss';

const Tips = () => {
    return (
        <div className={classes.Wrapper}>
            <div>
                <section>
                    <h3>Choose healthier carbohydrates</h3>
                    <p>
                        All carbs affect blood glucose levels so it’s important
                        to know which foods contain carbohydrates. Choose the
                        healthier foods that contain carbs and be aware of your
                        portion sizes.
                    </p>
                    <p>Here are some healthy sources of carbohydrate:</p>
                    <ul>
                        <li>
                            whole grains like brown rice, buckwheat and whole
                            oats
                        </li>
                        <li>fruit</li>
                        <li>vegetables</li>
                        <li>pulses such as chickpeas, beans and lentils</li>
                        <li>dairy like unsweetened yoghurt and milk.</li>
                    </ul>
                </section>
                <section>
                    <h3>Eat less salt</h3>
                    <p>
                        Eating lots of salt can increase your risk of high blood
                        pressure, which in turn increases risk of heart diseases
                        and stroke. And when you have diabetes, you’re already
                        more at risk of all of these conditions.
                    </p>
                    <p>
                        Try to limit yourself to a maximum of 6g (one
                        teaspoonful) of salt a day. Lots of pre-packaged foods
                        already contain salt so remember to check food labels
                        and choose those with less salt. Cooking from scratch
                        will help you keep an eye on how much salt you’re
                        eating. You can also get creative and swap out salt for
                        different types of herbs and spices to add that extra
                        flavour.
                    </p>
                </section>
                <section>
                    <h3>Eat less red and processed meat</h3>
                    <p>
                        If you’re cutting down on carbs, you might start to have
                        bigger portions of meat to fill you up. But it’s not a
                        good idea to do this with red and processed meat, like
                        ham, bacon, sausages, beef and lamb. These all have
                        links with heart problems and cancers.
                    </p>
                    <p>Try swapping red and processed meat for these:</p>
                    <ul>
                        <li>pulses such as beans and lentils</li>
                        <li>eggs</li>
                        <li>fish</li>
                        <li>poultry like chicken and turkey</li>
                        <li>unsalted nuts</li>
                    </ul>
                    <p>
                        Beans, peas and lentils are also very high in fibre and
                        don’t affect your blood glucose levels too much – making
                        them a great swap for processed and red meat and keeping
                        you feeling full. Most of us know that fish is good for
                        us, but oily fish like salmon and mackerel are even
                        better. These are rich in something called omega-3 oil,
                        which helps protect your heart. Try and aim to eat two
                        portions of oily fish a week.
                    </p>
                </section>
                <section>
                    <h3>Eat more fruit and veg</h3>
                    <p>
                        We know eating fruit and veg is good for you. It’s
                        always a good thing aim to eat more at meal times and
                        have them as snacks if you’re hungry. This can help you
                        get the vitamins, minerals and fibre your body needs
                        every day to help keep you healthy.
                    </p>
                    <p>
                        You might be wondering about fruit and if you should
                        avoid it because it’s sugary? The answer is no. Whole
                        fruit is good for everyone and if you have diabetes,
                        it’s no different. Fruits do contain sugar, but it’s
                        natural sugar. This is different to the added sugar
                        (also known as free sugars) that are in things like
                        chocolate, biscuits and cakes.
                    </p>
                    <p>
                        Products like fruit juices also count as added sugar, so
                        go for whole fruit instead. This can be fresh, frozen,
                        dried or tinned (in juice, not in syrup). And it’s best
                        to eat it throughout the day instead of one bigger
                        portion in one go.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Tips;
