import React from "react";
import styles from "./textcontent.css";

export function TextContent() {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img
            className={styles.avatar}
            src="https://s3-alpha-sig.figma.com/img/f478/57fa/28692c7c0bd9ec9b8226b812fbbd93b4?Expires=1604880000&Signature=LnM1o944URXQBEpaZvKedVwODeZ7sf4CUOP7zD6PGuL9DYj4n0BhILozAqrxRITnbuns~XoGLZ-gk4mFSvxDFBr9da0bv22F-zKU3yjwMwhYnMYQ0~P0N9zpDE3a1U2ygY4dwvbVoLUdqijGl0wV-Zrq5iVQWKt6VGev~GIGV2dV8Bw5f0B5~IAKgRVfVsXndmfHK-3F30yG~dfsCDNycLGsYB3KURQ8I0XxcIJJ7qdQx75s9C~Estgu4f4N6gEcGcg~2zppbCuMK17EJjovfi71AbN8hwXxT0Ja-R-jN~6rIxdskra6PLzGCr956Dumjvyd8JwC2qQ7txopcax4KQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt="avatar"
          />
          <a href="#user-url" className={styles.username}>
            Дмитрий Гришин
          </a>
        </div>
        <span className={styles.createdAd}>
          <span className={styles.publishedLabel}>опубликовано </span>4 часа
          назад
        </span>
      </div>
      <h2 className={styles.title}>
        <a href="#post-url" className={styles.postLink}>
          Следует отметить, что новая модель организационной деятельностиСледует
          отметить, что новая модель организационной деятельностиСледует
          отметить, что новая модель организационной деятельностиСледует
          отметить, что новая модель организационной деятельности
        </a>
      </h2>
    </div>
  );
}
