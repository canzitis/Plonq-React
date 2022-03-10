import React, {MutableRefObject, useEffect, useRef, useState} from 'react';
import {Container, LoadingBar, PreloaderImage, PreloaderProgress} from './Preloader.styled';
import {useRecoilValue, useSetRecoilState} from "recoil";
import {PageLoaded} from "../../../recoil/atom";


const Preloader = () => {
    const progressLoading: any = useRef();
    const [loadingEnd, setLoadingEnd] = useState(false);
    const pageLoaded = useRecoilValue(PageLoaded)
    const setPageLoaded = useSetRecoilState(PageLoaded);

    const a =124;


    const ref = useRef() as MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        if (!ref.current) return;

        if (loadingEnd) {
            document.body.classList.remove('stop-scroll');
            if (document.documentElement.scrollTop) {
                window.scrollTo({top: 0});
            }
            return;
        }

        document.body.classList.add('stop-scroll');
        const progressElement = ref.current.querySelector('div');
        const progressImg = ref.current.querySelector('img');

        let progress = progressElement ? +progressElement.textContent! : 0;

        const interval = () => {
            if (!progressElement) return;

            if (progress === 75 && !pageLoaded) {
                return;
            }

            ++progress;
            progressElement.textContent = `${progress > 100 ? 100 : progress}`;
            progressImg.style.opacity = `${progress * 0.01}`;
            progressLoading.current.style.width = `${progress}%`;

            if (progress >= 100) {
                clearInterval(timer);
                setPageLoaded(
                    {
                        pageLoaded: false
                    }
                );
                setLoadingEnd(true)
            }
        };

        const timer = setInterval(interval);

        return () => clearInterval(timer);
    }, [ref, loadingEnd, pageLoaded]);


    return (
        <Container ref={ref} loadingEnd={loadingEnd}>
            <span>
               <PreloaderImage src='/images/Preloader/smoke.png' alt={''} style={{opacity: 0}}/>
                <PreloaderProgress>0</PreloaderProgress>
                <LoadingBar ref={progressLoading}/>
            </span>
        </Container>
    );
};

export default Preloader;
