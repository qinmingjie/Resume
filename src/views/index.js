import React, { useEffect } from "react";
import {Button,Carousel,Row,Col} from "antd"
import four from "../static/img/4.jpg"
import six from "../static/img/6.jpg"
import seven from "../static/img/7.jpg"
import "../index.css"
import {Anchor} from "antd"
const {Link} = Anchor
function Index(){
    function click(event){
        console.log(event.screenX)
    }
    return (
        <Row 
            className="First" 
            align="middle"
            justify="center"
        >
            <Col 
                className="title"
            >
                <p className="maodian">不积硅步无以至千里,不积小流无以成江海</p>
                <Row 
                    justify="center"
                >
                    <Col id="Btn">
                        <Anchor 
                            affix={false}
                        >
                        <Link href="#about" title="关于我"></Link>
                        </Anchor>
                        <Anchor affix={false}>
                            <Link href="#project" title="作品"></Link>
                        </Anchor>
                        <Anchor affix={false}>
                            <Link href="http://www.github.com/qinmingjie" title="Github"></Link>
                        </Anchor>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Index;