import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker';
import Slider from '@material-ui/core/Slider';

function TopPanel() {
    const [startDateValue, onStartDateChange] = useState(new Date());
    const [startTimeValue, onStartTimeChange] = useState('10:00');
    const [endDateValue, onEndDateChange] = useState(new Date());
    const [endTimeValue, onEndTimeChange] = useState('10:00');
    const [sizeValue, onSizeChange] = useState(7);
    return (
        <Container>
            <Row>
                <Col>
                    <span>Start: </span>
                    <DatePicker
                        onChange={onStartDateChange}
                        value={startDateValue}
                        minDate={new Date('2013-10-02')}
                    />
                    <TimePicker
                        onChange={onStartTimeChange}
                        value={startTimeValue}
                    />
                </Col>
                <Col>
                    <span>End: </span>
                    <DatePicker
                        onChange={onEndDateChange}
                        value={endDateValue}
                        maxDate={new Date('2013-12-03')}
                    />
                    <TimePicker
                        onChange={onEndTimeChange}
                        value={endTimeValue}
                    />
                </Col>
                <Col>
                    <Slider
                        defaultValue={80}
                        getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider-always"
                        step={10}
                        marks={sizeValue}
                        valueLabelDisplay="on"
                    />
                    {/* <IonRangeSlider type={"single"} min={1} max={10} step={1} /> */}
                    {/* <Form>
                        <Form.Group controlId="formBasicRange">
                            <Form.Label>Range</Form.Label>
                            <Form.Control type="range" value={sizeValue} onChange={onSizeChange}/>
                        </Form.Group>
                    </Form> */}
                    <span>2^{sizeValue} = 128 samples</span>
                </Col>
            </Row>
        </Container>
    );
}

export default TopPanel