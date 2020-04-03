import React from "react"
import {Avatar,Card,Progress,Row,Col} from "antd"
import avat from "../static/img/avator.jpg"
import { UserOutlined } from '@ant-design/icons';
export default function About(){
    return(
        <div id="about">
            <div className="position">
                <div className="wrap">
                    <Card
                        title="关于我"
                        type="inner"
                        headStyle={{
                            textAlign:"center"
                        }}
                        bodyStyle={{
                            textAlign:"center",
                            paddingTop:"50px"
                        }}
                    >
                        <Avatar
                            icon={UserOutlined}
                            src={avat}
                            size={120}  
                        >
                        </Avatar>
                        <div className="introduce" style={{
                            marginTop:"20px"
                        }}>
                            <p>我叫秦明杰,计算机应用专业,坐标西安,自学前端,有良好的文档阅读和持续学习能力。</p>
                            <p>目前可能没有那么强,但我相信明天的我总会比今天强!不积硅步无以至千里,不积小流无以成江海。</p>
                        </div>
                        <Row className="" 
                            style={{
                                marginTop:"40px"
                            }}
                            justify="center"
                        >
                            <Col xs={4} sm={1} style={{marginRight:"10px"}}>
                                <Progress type="circle"  percent={85} width={60} />
                                <p>HTML</p>
                            </Col>
                            <Col xs={4} sm={1} style={{marginRight:"10px"}}>
                                <Progress type="circle"  percent={85} width={60} />
                                <p>CSS</p>
                            </Col>
                            <Col  xs={4} sm={1} style={{marginRight:"10px"}}>
                                <Progress type="circle"  percent={80} width={60} />
                                <p>Javascript</p>
                            </Col>
                            <Col xs={4} sm={1} style={{marginRight:"10px"}}>
                                <Progress type="circle"  percent={70} width={60} />
                                <p>React</p>
                            </Col>
                        </Row>
                    </Card>
                </div>
            </div>
        </div>
    )
}