import styled from "styled-components";
import { motion } from "framer-motion";
import farmerpicture from "../assets/Farmer.jpg";

const Agriculture = () => {
  return (
    <Section id="Agriculture">
      <Container>
        <Title
          as={motion.h2}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Agriculture Vision
        </Title>

        <Wrapper>
          <Left
            as={motion.div}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h1>Growing the Future 🌱</h1>

            <p>
              I am passionate about agriculture and the role it plays in
              building a sustainable future. My goal is to combine technology
              with farming to improve productivity and efficiency.
            </p>

            <p>
              From smart farming techniques to agritech solutions, I believe
              innovation can transform agriculture.
            </p>
          </Left>

          <Right
            as={motion.div}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <Image src={farmerpicture} alt="agriculture" />
          </Right>
        </Wrapper>
      </Container>
    </Section>
  );
};

export default Agriculture;

const Section = styled.section`
  padding: 100px 0;
`;

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;

  text-align: center;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Left = styled.div`
  flex: 1;

  h1 {
    margin-bottom: 20px;
    color: #00ff88;
    font-size: 2.5rem;
  }

  p {
    margin-bottom: 15px;
    line-height: 1.6;
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;

const Right = styled.div`
  flex: 1;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 16px;
`;
