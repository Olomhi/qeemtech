import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import SportsModal from "./SportsModal";

import f1 from "../assets/football1.jpg";
import f2 from "../assets/football2.jpg";
import f3 from "../assets/football3.jpg";
import f4 from "../assets/football4.jpg";
import f5 from "../assets/football5.jpg";
import f6 from "../assets/football6.jpg";

import r1 from "../assets/marathon1.jpg";
import r2 from "../assets/marathon2.jpg";
import r3 from "../assets/marathon3.jpg";
import r4 from "../assets/marathon4.jpg";
import r5 from "../assets/marathon5.jpg";
import r6 from "../assets/marathon6.jpg";

const footballImages = [
  {
    src: f1,
    caption: "Match Day Focus ⚽",
  },
  {
    src: f2,
    caption: "Team Coordination",
  },
  {
    src: f4,
    caption: "Peak Performance",
  },
  {
    src: f3,
    caption: "Winning Mentality",
  },
  {
    src: f5,
    caption: "2023 FUNAAB NAAS Freshers Cup Celebration Moment (Runner-up)",
  },
  {
    src: f6,
    caption: "Outdoor Game",
  },
];

const runImages = [
  {
    src: r2,
    caption: "Built For The Long Run 🏃‍♂️",
  },

  {
    src: r3,
    caption: "Pushing Limits",
  },
  {
    src: r1,
    caption: "2026 Access Bank Lagos City Marathon Victory Moment",
  },
  {
    src: r6,
    caption: "2024 Access Bank Lagos City Marathon Victory Moment",
  },
  {
    src: r4,
    caption: "Celebration Moment",
  },
  {
    src: r5,
    caption: "2024 FUNAAB Back To School Marathon Victory Moment",
  },
];

const Sports = () => {
  const [modalData, setModalData] = useState(null);

  const [showFootball, setShowFootball] = useState(false);

  const [showRunning, setShowRunning] = useState(false);

  const openModal = (images, index) => {
    setModalData({
      images,
      index,
    });
  };

  return (
    <Section id="Sports">
      <Container>
        <Top>
          <MiniTitle>ATHLETE LIFE</MiniTitle>

          <Title
            as={motion.h2}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Sports & Discipline
          </Title>

          <Description>
            Sports shaped my mentality long before tech. Football and marathon
            training taught me discipline, endurance, leadership, consistency,
            and performing under pressure, the same mindset I bring into
            software engineering.
          </Description>
        </Top>

        <ContentRow $reverse>
          <Left>
            <Badge>⚽ Football</Badge>

            <SectionTitle>
              Discipline Through Teamwork & Competition
            </SectionTitle>

            <Text>
              Football strengthened my leadership, focus, strategic thinking,
              and ability to perform under pressure. Every game taught me how to
              stay disciplined and execute with confidence.
            </Text>

            <Stats>
              <StatCard>
                <h3>1000+</h3>
                <p>Training Sessions</p>
              </StatCard>

              <StatCard>
                <h3>100%</h3>
                <p>Consistency</p>
              </StatCard>

              <StatCard>
                <h3>24/7</h3>
                <p>Discipline Mindset</p>
              </StatCard>
            </Stats>
          </Left>

          <Right>
            <Gallery>
              {(showFootball ? footballImages : footballImages.slice(0, 3)).map(
                (item, index) => (
                  <Card
                    key={index}
                    as={motion.div}
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => openModal(footballImages, index)}
                  >
                    <Image src={item.src} alt={item.caption} />

                    <Overlay>
                      <Caption>{item.caption}</Caption>
                    </Overlay>
                  </Card>
                ),
              )}
            </Gallery>

            {footballImages.length > 3 && (
              <ButtonWrap>
                <ToggleBtn onClick={() => setShowFootball(!showFootball)}>
                  {showFootball ? (
                    <>
                      Show Less
                      <FaChevronUp />
                    </>
                  ) : (
                    <>
                      Show More
                      <FaChevronDown />
                    </>
                  )}
                </ToggleBtn>
              </ButtonWrap>
            )}
          </Right>
        </ContentRow>

        <ContentRow $reverse>
          <Left>
            <Badge>🏃 Marathon</Badge>

            <SectionTitle>Endurance Built Through Consistency</SectionTitle>

            <Text>
              Long-distance running taught me resilience, patience, and mental
              toughness. It helped me build the endurance needed for both sports
              and software engineering.
            </Text>

            <Stats>
              <StatCard>
                <h3>5+</h3>
                <p>Marathon Sessions</p>
              </StatCard>

              <StatCard>
                <h3>∞</h3>
                <p>Growth Mentality</p>
              </StatCard>

              <StatCard>
                <h3>1%</h3>
                <p>Better Everyday</p>
              </StatCard>
            </Stats>
          </Left>

          <Right>
            <Gallery>
              {(showRunning ? runImages : runImages.slice(0, 3)).map(
                (item, index) => (
                  <Card
                    key={index}
                    as={motion.div}
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => openModal(runImages, index)}
                  >
                    <Image src={item.src} alt={item.caption} />

                    <Overlay>
                      <Caption>{item.caption}</Caption>
                    </Overlay>
                  </Card>
                ),
              )}
            </Gallery>

            {runImages.length > 3 && (
              <ButtonWrap>
                <ToggleBtn onClick={() => setShowRunning(!showRunning)}>
                  {showRunning ? (
                    <>
                      Show Less
                      <FaChevronUp />
                    </>
                  ) : (
                    <>
                      Show More
                      <FaChevronDown />
                    </>
                  )}
                </ToggleBtn>
              </ButtonWrap>
            )}
          </Right>
        </ContentRow>

        {/* MODAL */}
        <SportsModal data={modalData} onClose={() => setModalData(null)} />
      </Container>
    </Section>
  );
};

export default Sports;

const Section = styled.section`
  padding: 120px 0;
  background: #050505;
  background: linear-gradient(135deg, #041812, #071d1a);

  overflow: hidden;
`;

const Container = styled.div`
  width: 90%;
  max-width: 1350px;
  margin: auto;
`;

const Top = styled.div`
  text-align: center;
  max-width: 850px;
  margin: auto auto 100px;
`;

const MiniTitle = styled.p`
  color: #00ff88;
  letter-spacing: 3px;
  font-size: 0.85rem;
  margin-bottom: 15px;
  font-weight: 700;
`;

const Title = styled.h2`
  font-size: 3.5rem;
  color: white;
  margin-bottom: 20px;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  color: #bdbdbd;
  line-height: 1.9;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const ContentRow = styled.div`
  display: flex;
  /* flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")}; */
  flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")};

  justify-content: space-between;
  align-items: center;

  gap: 60px;
  margin-bottom: 120px;

  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;

  padding: 10px 18px;

  background: rgba(0, 255, 136, 0.1);
  border: 1px solid rgba(0, 255, 136, 0.2);
  color: #00ff88;
  border-radius: 40px;
  font-size: 0.9rem;
  font-weight: 600;

  margin-bottom: 25px;
`;

const SectionTitle = styled.h3`
  color: white;
  font-size: 2.3rem;
  line-height: 1.2;

  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Text = styled.p`
  color: #bdbdbd;
  line-height: 1.9;
  margin-bottom: 35px;
`;

const Stats = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
`;

const StatCard = styled.div`
  flex: 1 1 140px;

  min-width: 120px;

  padding: 22px;

  border-radius: 18px;

  background: #101010;
  border: 1px solid rgba(255, 255, 255, 0.06);

  h3 {
    color: #00ff88;
    font-size: 1.8rem;
    margin-bottom: 10px;
  }

  p {
    color: #bdbdbd;
    font-size: 0.9rem;
  }
`;

const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 18px;
`;

const Card = styled.div`
  position: relative;

  width: 180px;
  height: 240px;

  overflow: hidden;
  border-radius: 22px;

  cursor: pointer;

  background: #111;

  transition: 0.4s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 255, 136, 0.12);
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 210px;
  }

  @media (max-width: 500px) {
    width: 100%;
    max-width: 300px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;

  transition: 0.4s ease;

  ${Card}:hover & {
    transform: scale(1.08);
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;

  background: linear-gradient(to top, rgba(0, 0, 0, 0.92), rgba(0, 0, 0, 0.1));

  display: flex;
  align-items: flex-end;

  padding: 16px;
`;

const Caption = styled.p`
  color: white;
  font-size: 0.85rem;
  line-height: 1.5;
`;

const ButtonWrap = styled.div`
  margin-top: 30px;

  display: flex;
  justify-content: center;
`;

const ToggleBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 14px 24px;

  border: none;
  border-radius: 50px;

  background: linear-gradient(135deg, #00ff88, #00c9ff);

  color: black;

  font-weight: 700;
  font-size: 0.95rem;

  cursor: pointer;

  transition: 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0, 255, 136, 0.25);
  }
`;
