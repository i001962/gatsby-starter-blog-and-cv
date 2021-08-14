import React from 'react'
import { Card, Row, Col, Divider } from 'antd'

const Publications = ({ publication }) => (
  <>
    <h3 className="text-center mt-1 mb-0">Publications</h3>
    <Card className="publication">
      {publication.map((institution, i) => (
        <Row
          type="flex"
          justify="space-around"
          key={institution.place}
          className="text-lg"
        >
          <Divider orientation="left" className={i === 0 && 'mt-0'}>
            {institution.period}
          </Divider>
          <Col span={4}>
            <a href={institution.url} target="_blank" rel="noopener noreferrer">
            <img
              src={`/companies/${institution.logo}`}
              alt={institution.place}
              className="max-w-3/4 inline"
            /></a>
                        <h3>{institution.place}</h3>

          </Col>
      {/*     <Col span={10}>
            <h3>{institution.place}</h3>
          </Col> */}
          <Col span={10}>
            <h3>{institution.degree}</h3>
            <h3>{institution.text1}</h3>

          </Col>
        </Row>
      ))}
    </Card>
  </>
)

export default Publications
