import React from 'react'
import { Card, Col, Divider, Row } from 'antd'
const Volunteer = ({ volunteer }) => (
  <>
    <h3 className="text-center mt-1 mb-0">Awards</h3>
    <Card className="education">
      {volunteer.map((activity, i) => (
        <Row
          type="flex"
          justify="space-around"
          key={activity.place}
          className="text-lg"
        >
          <Divider orientation="left" className={i === 0 && 'mt-0'}>
            {activity.period}
          </Divider>
          <Col span={4}>
            <img
              src={`/companies/${activity.logo}`}
              alt={activity.place}
              className="max-w-3/4 inline"
            />
          </Col>
      {/*     <Col span={10}>
            <h3>{institution.place}</h3>
          </Col> */}
          <Col span={10}>
            <h3>{activity.degree}</h3>
            <h3>{activity.text1}</h3>
            <h3>{activity.text2}</h3>
            <h3>{activity.text3}</h3>

          </Col>
        </Row>
      ))}
    </Card>
  </>
)
/* const Volunteer = ({ volunteer }) => (
  <>
    <h3 className="text-center mt-1 mb-0">Awards</h3>
    <Card>
      {volunteer.map((activity, i) => (
        <Row type="flex" justify="space-around" key={activity.place} className="text-lg">
          <Divider orientation="left" className={i === 0 && 'mt-0'}>
            {activity.period}
          </Divider>
          <Col span={6}>
            <img
              src={`/companies/${activity.logo}`}
              alt={activity.place}
              className="max-w-3/4 inline"
            />
          </Col>
          <Col span={17}>
            <h3>{activity.description}</h3>
          </Col>
        </Row>
      ))}
    </Card>
  </>
) */

export default Volunteer
