// developers:
// Mor Yossef 209514264
// Shir Davidov 318852159
// Rinat Polonski 313530842

import Cat from './chartcategories'
import Years from './chartyear'
import TotalSumPrices from "./chartprice"
import { Grid, Row, Col } from 'react-flexbox-grid';

function Home() {
    return (
        <Grid fluid>
            <Row>
                <Col xs={10} sm={4} md={3}>
                    <Cat title="Categories" data={Cat} />
                </Col>
                <Col xs={10} sm={4} md={3}>
                    <TotalSumPrices title="TotalSumPrices" data={TotalSumPrices} />
                </Col>
            </Row>
            <Row>
                <Col xs={8} sm={6} md={5}>
                    <Years title="Years" data={Years} />
                </Col>
            </Row>
        </Grid>
    );
}

export default Home;