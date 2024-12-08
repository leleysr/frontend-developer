import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import styles from "./styles.module.css";

interface MainBannerProps {
  banners: {
    desktopImage: string;
    mobileImage: string;
  }[];
}

export function MainBanner({ banners }: MainBannerProps) {
  const splideOptions = {
    type: "loop",
    width: "100%",
    perMove: 1,
    pagination: true,
    autoplay: true,
    interval: 5000,
    pauseOnHover: true,
    arrows: false,
    perPage: 1,
    gap: 0,
    drag: true,
    classes: {
      pagination: `splide__pagination splide__pagination--ltr ${styles["main-banner-pagination"]}`,
      page: `splide__pagination__page ${styles["main-banner-page"]}`,
      arrows: `splide__arrows your-class-arrows ${styles["main-banner-arrows"]}`,
      arrow: `splide__arrow your-class-arrow ${styles["main-banner-arrow"]}`,
      prev: `splide__arrow--prev your-class-prev ${styles["main-banner-arrow-prev"]}`,
      next: `splide__arrow--next your-class-next ${styles["main-banner-next-next"]}`,
    },
  };

  return (
    <div className={styles["main-banner-wrapper"]}>
      <Splide
        className={styles["main-banner"]}
        id="MainBannerSlider"
        options={splideOptions}
        hasTrack={false}
      >
        <SplideTrack>
          {banners.map((banner, index) => {
            return (
              <SplideSlide key={index} className={styles["main-banner-slide"]}>
                <picture>
                  <source
                    media="(max-width: 768px)"
                    srcSet={banner.mobileImage}
                  />

                  <img
                    className={styles["main-banner-image"]}
                    src={banner.desktopImage}
                    alt="Main Banner"
                  />
                </picture>
              </SplideSlide>
            );
          })}
        </SplideTrack>
      </Splide>
    </div>
  );
}
