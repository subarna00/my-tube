import { Col, Container, Row } from "react-bootstrap";
import { CategoriesBar } from "../../components/categoriesBar/CategoriesBar";
import { Video } from "../../components/video/Video";

export const HomeScreen = () => {
  return (
    <>
      <Container>
        <CategoriesBar />
        <Row>
          {[...new Array(20)].map(() => {
            return (
              <Col lg={3} md={4}>
                <Video />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};
