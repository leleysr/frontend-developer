import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export function ProductShelf() {
  const splideOptions = {
    type: "loop",
    width: "100%",
    perMove: 1,
    pagination: true,
    arrows: true,
    perPage: 4,
    gap: 16,
    breakpoints: {
      1024: {
        perPage: 2,
        pagination: true,
        arrows: true,
      },
    },
    drag: true,
    classes: {
      pagination: `splide__pagination splide__pagination--ltr`,
      page: `splide__pagination__page `,
    },
  };

  return (
    <div>
      <div>
        <h3>Mais vendidos</h3>
      </div>

      <div>
        <Splide
          id="ProductShelfSlider"
          options={splideOptions}
          hasTrack={false}
        >
          <SplideTrack>
            <SplideSlide>
              <div>oii</div>
            </SplideSlide>
            <SplideSlide>
              <div>oii</div>
            </SplideSlide>
            <SplideSlide>
              <div>oii</div>
            </SplideSlide>
            <SplideSlide>
              <div>oii</div>
            </SplideSlide>
            <SplideSlide>
              <div>oii</div>
            </SplideSlide>
            <SplideSlide>
              <div>oii</div>
            </SplideSlide>
            <SplideSlide>
              <div>oii</div>
            </SplideSlide>
            <SplideSlide>
              <div>oii</div>
            </SplideSlide>
          </SplideTrack>
        </Splide>
      </div>
    </div>
  );
}
