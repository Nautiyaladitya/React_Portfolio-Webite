import {useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


 export const Banner = () => {

const [loopNum, setLoopNum] = useState(0);
const [isDeleting, setIsDeleting] = useState(false);
const toRotate = ["Web Developer", "Web Designer", "Problem Solver"];
const [text, setText] = useState('');
const [delta, setDelta] = useState(300 - Math.random() * 100);
const period = 2000;

 useEffect (() =>{
    let ticker = setInterval(() => {
        tick();

    }, delta)

    return () => {clearInterval(ticker)};

 }, [text])

 const tick = ()=>{
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length +1);
    setText(updatedText);

    if(isDeleting){
        setIsDeleting(false);
    }
    if(!isDeleting && updatedText=== fullText){
        setIsDeleting(true);
        setDelta(period);
    }else if(isDeleting && updatedText=== ''){
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
    }

 }

    return (
        <section className="Banner" id="home">
            <Container>
                <Row className="align-items-centre">
                    <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>

                    {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <span className="tagline"> Welcome to my Portfolio</span>
                    <h1>{`Hello I'm Aditys Nautiyal ` } <span className="wrap">{text}</span></h1>
                    <p>lorem100 ndsdgs ggsdygyggggggg gggggggggggg ggggggggghs bcghvcv cvhdvccc ccccc vghcvasdhc sdcsdc sdgcsdgc scg cg syucgsjhetfsc sc  sdc c gsg gcds cg sc cg sgcgsgyusgd sgsyugdysyg yudgs  yudsg dyggssx gwgxfwsg </p>
                    <button onClick={()=> console.log('connect')}> Let's Connect<ArrowRightCircle size={25}/></button>
                    </div>}
                    
                    </TrackVisibility>
                    </Col>

                    <Col s={12} md={6} xl={5}>
                    <img src = {headerImg} alt="Header Image"/>

                    </Col>
                </Row>
            </Container>
            
        </section>
    )
 }