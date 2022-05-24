import React from 'react';
import styled from 'styled-components';
import imageuser from '../images/ImageUser.png';

const Container = styled.ScrollView`
  flex: 1;
  background-color: #97dfef;
`;
const ContainerHeader = styled.View`
  flex: 1;
  background-color: #97dfef;
  justify-content: center;
  align-items: center;
`;
const Header = styled.View`
  margin-top: 8px;
  height: 100px;
  width: 100%;
  background-color: #47d0ee;
  border-radius: 5px;
  align-items: center;
  flex-direction: row;
`;
const Appoinment = styled.Text`
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  text-decoration: underline;
  color: #091687;
`;
const UpcomingText = styled.Text`
  margin-top: 5px;
  padding: 9px;
  font-size: 18px;
  display: flex;
  align-items: center;
  color: #091687;
`;
const UpcomingDataSpace = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;
const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  color: #030224;
`;
const Body = styled.View`
  background-color: #d8a750;
  width: 300px;
  justify-content: center;
  align-items: center;
`;

const HistoryView = styled.View`
  margin_top: 10px;
  padding: 10px;
  border_bottom_width: 1px;
  border_bottom_color: #ccc;
  background-color: #c4c4c4;
  flex_direction: row;
`;
const Details = styled.View`
  width: 300px;
  justify-content: center;
  flex: 1;
`;
const Avator = styled.View`
  background-color: #225cf1;
  width: 90px;
  display: flex;
`;
const DateView = styled.View`
  padding: 1px;
  margin-left: 3px;
  background-color: #225cf1;
  width: 110px;
  height: 90px;
  justify-content: center;
  align-items: center;
`;
const DisplayDate = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
`;
const DisplayTime = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
`;
const Username = styled.Text`
  font-size: 16px;
`;
const ServieDate = styled.Text`
  font-size: 16px;
`;
const ServieTime = styled.Text`
  font-size: 16px;
`;
const ServiceDesc = styled.Text`
  font-size: 16px;
  padding: 5px;
`;
const ImagaeAvator = styled.Image`
  margin-top: 5px;
  margin-left: 2px;
  width: 80px;
  height: 80px;
  background: #f3f5f6;
  border-radius: 30px;
`;

const BookingHistoryScreen = () => {
  return (
    <Container>
      <ContainerHeader>
        <Title>Booking History</Title>
      </ContainerHeader>

      <Header>
        <ImagaeAvator source={imageuser} />
        <UpcomingText>Barun</UpcomingText>
      </Header>
      <ContainerHeader>
        <Appoinment>APPOINTMENTS</Appoinment>
      </ContainerHeader>

      <UpcomingDataSpace>
        <UpcomingText>Upcomning</UpcomingText>
      </UpcomingDataSpace>
      <Header>
        <DateView>
          <DisplayDate>May-20-2022</DisplayDate>
          <DisplayTime>10 am</DisplayTime>
        </DateView>
        <ServiceDesc>Details: Basic Bike Service</ServiceDesc>
      </Header>
      <UpcomingText>History</UpcomingText>
      <Header>
        <DateView>
          <DisplayDate>Jan-20-2020</DisplayDate>
          <DisplayTime>11 am</DisplayTime>
        </DateView>
        <ServiceDesc>Details: Basic Bike Service</ServiceDesc>
      </Header>
      <Header>
        <DateView>
          <DisplayDate>Dec-10-2020</DisplayDate>
          <DisplayTime>4 pm</DisplayTime>
        </DateView>
        <ServiceDesc>Details: Complete Bike Servicesdcd sdsdfdd</ServiceDesc>
      </Header>
    </Container>
  );
};

const History = () => {
  return (
    <HistoryView>
      <Avator>
        <ImagaeAvator source={imageuser} />
      </Avator>
      <Details>
        <ServieDate>Service Date: 2nd Feb 2022</ServieDate>
        <ServiceDesc>Details: Basic Bike Service</ServiceDesc>
      </Details>
    </HistoryView>
  );
};
export default BookingHistoryScreen;
