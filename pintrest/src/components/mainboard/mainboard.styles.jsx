import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 15px;
  justify-content: center;
`

export const Container = styled.div`
  /* display: flex; */
  /* column-count: 5;
  max-width: 1260px; */
  column-gap: 10px;
  margin: 0 auto;
  height: 100%;
  background-color: white;

  @media (min-width: 0px) and (max-width: 755px) {
    max-width: 504px;
    column-count: 2;
  }

  @media (min-width: 756px) and (max-width: 1007px) {
    max-width: 756px;
    column-count: 3;
  }

  @media (min-width: 1008px) and (max-width: 1259px) {
    max-width: 1008px;
    column-count: 4;
  }

  @media (min-width: 1260px) and (max-width: 1511px) {
    max-width: 1260px;
    column-count: 5;
  }

  @media (min-width: 1512px) and (max-width: 1763px) {
    max-width: 1512px;
    column-count: 6;
  }

  @media (min-width: 1764px) and (max-width: 2015px) {
    max-width: 1764px;
    column-count: 7;
  }

  @media (min-width: 2016px) and (max-width: 1763px) {
    max-width: 2016px;
    column-count: 8;
  }

  @media (min-width: 2268px) and (max-width: 2519px) {
    max-width: 1260px;
    column-count: 9;
  }
  @media (min-width: 2520px) and (max-width: 2773px) {
    max-width: 1260px;
    column-count: 10;
  }
  @media (min-width: 2772px) and (max-width: 3023px) {
    max-width: 1260px;
    column-count: 11;
  }
  @media (min-width: 3024px) and (max-width: 3275px) {
    max-width: 1260px;
    column-count: 12;
  }
  @media (min-width: 3276px) and (max-width: 3527px) {
    max-width: 3276px;
    column-count: 13;
  }
  @media (min-width: 3528px) and (max-width: 3779px) {
    max-width: 3528px;
    column-count: 14;
  }
  @media (min-width: 3780px) and (max-width: 4031px) {
    max-width: 3780px;
    column-count: 15;
  }
  @media (min-width: 4032px) and (max-width: 4283px) {
    max-width: 4032px;
    column-count: 16;
  }
  @media (min-width: 4284px) and (max-width: 4535px) {
    max-width: 4284px;
    column-count: 17;
  }
  @media (min-width: 4536px) and (max-width: 4787px) {
    max-width: 4536px;
    column-count: 18;
  }
  @media (min-width: 4788px) and (max-width: 5039px) {
    max-width: 4788px;
    column-count: 19;
  }
  @media (min-width: 5040px) and (max-width: 5291px) {
    max-width: 5040px;
    column-count: 20;
  }
  @media (min-width: 5292px) and (max-width: 5543px) {
    max-width: 5292px;
    column-count: 21;
  }
  @media (min-width: 5544px) and (max-width: 5795px) {
    max-width: 5544px;
    column-count: 22;
  }

  @media (min-width: 7308px) and (max-width: 7559px) {
    max-width: 7308px;
    column-count: 29;
  }
`;