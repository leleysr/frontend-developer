import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export function MainBanner() {
  const splideOptions = {
    type: "loop",
    width: "100%",
    perMove: 1,
    pagination: true,
    arrows: true,
    perPage: 1,
    gap: 0,
    breakpoints: {},
    drag: true,
    classes: {
      pagination: `splide__pagination splide__pagination--ltr`,
      page: `splide__pagination__page `,
    },
  };

  return (
    <div>
      <Splide id="MainBannerSlider" options={splideOptions} hasTrack={false}>
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
  );
}
