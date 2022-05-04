import React from 'react'
import styled from '@emotion/styled';
import name from '../img/user.png';
import email from '../img/mail.png';
import address from '../img/map.png';
import edu from '../img/edu.png';
import resume from '../img/resume.png';
import calendar from '../img/calendar.png';

const Base = styled.div`
  width: 100%;
  text-align: center;
`;

const ContentWrapper = styled.div`
  padding: 10px 40px;
  padding-bottom: 30px;
  max-width: 1000px;
  margin: 0 auto;
`;

const ContentTitle = styled.h1`

`;

const Cardlist = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-basis: 200px;
`;

const Card = styled.div`
  display: flex;
  margin-right: 20px;
  margin-top: 40px;
  text-align: left;

`;

const CardImg = styled.img`
  width: 3rem;
  height: 3rem;
  margin-right: 10px;
`;

const CardContentWrapper = styled.div`

`;

const CardTitle = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
`;

const CardContent = styled.div`
  width: 11rem;
`;




export default function HomeContent() {
  return <>
    <Base id="about_me">
      <ContentWrapper>
        <ContentTitle>
          About me
        </ContentTitle>
        <Cardlist>
          <Card>
            <CardImg src={name} />
            <CardContentWrapper>
              <CardTitle>
                이름
              </CardTitle>
              <CardContent>
                변상우
              </CardContent>
            </CardContentWrapper>
          </Card>
          <Card>
            <CardImg src={calendar} />
            <CardContentWrapper>
              <CardTitle>
                생년월일
              </CardTitle>
              <CardContent>
                1995.12.01
              </CardContent>
            </CardContentWrapper>
          </Card>
          <Card>
            <CardImg src={email} />
            <CardContentWrapper>
              <CardTitle>
                이메일
              </CardTitle>
              <CardContent>
                bsu7959@gmail.com
              </CardContent>
            </CardContentWrapper>
          </Card>
          <Card>
            <CardImg src={address} />
            <CardContentWrapper>
              <CardTitle>
                주소
              </CardTitle>
              <CardContent>
                서울시 중랑구
              </CardContent>
            </CardContentWrapper>
          </Card>
          <Card>
            <CardImg src={edu} />
            <CardContentWrapper>
              <CardTitle>
                학력
              </CardTitle>
              <CardContent>
                서울과학기술대학교<br />(기계시스템디자인공학)
              </CardContent>
            </CardContentWrapper>
          </Card>
          <Card>
            <CardImg src={resume} />
            <CardContentWrapper>
              <CardTitle>
                소개
              </CardTitle>
              <CardContent>
                저는 기계공학을 전공했지만 개발자의 꿈을 가지고 새로이 공부중입니다.
              </CardContent>
            </CardContentWrapper>
          </Card>
        </Cardlist>
      </ContentWrapper>
    </Base>

  </>


}
