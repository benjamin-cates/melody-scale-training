// These musical excerpts are protected by copyright, belonging to Bernard Bouchard (Copyright, Bernard Bouchard, 1998). This material may be used for the purpose of publication and of communication with acknowledgment as property of the rightful author (Copyright, Bernard Bouchard, 1998).

type TsvClip = {
  compressedNotes: string;
  tonic: number;
  scale: "major" | "minor";
  category: "Peaceful" | "Happy" | "Scary" | "Sad" | "Tests";
};

export const TSV_CLIPS: Record<string, TsvClip> = {
  "A01 (E♭ major)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE2WR2w0FIQhEG5psREGlFmP_bdzoii7ezxmGh8fWGtWO8CTNCB2tRdnykWGkYAZNyVuuejEjDslxy7uefH-657Ov890vfr7c9ez7s80H6_CKFhT_xPJGqCKTRaqP1M8UnJT6XWq3QAiy19FEek4mY7pvpgUVklYfZwUZ2wBhSO2Ib3oi_nzBH2OakD8bjfJJXJjJOJ9_nvogoEG6_wCW2n16KwIAAA",
    "category": "Peaceful",
    "tonic": 3,
    "scale": "major"
  },
  "A01 (modified)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE2WR2w0FIQhEG5psREWkFmP_bdzoii7ezxmGh8fWGtWO8CQtCB2tRd7y4WGkYAZNmbZcdTEjDpnjlnc9-f50z8--nu9-9vP5rhffX2w-sg5PVCD-ifJGqKKQRaqP1M8UnJT6XWq3gAN4r6OJ9JxMxnTfTAsqOK6-XBRkbAM4g6UjvumJ-PMFf4xpQv5sNMoncWEm43z-eeqDgAbp_gPcUWj6KwIAAA",
    "tonic": 3,
    "scale": "minor",
    "category": "Peaceful"
  },
  "A02 (E major)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE31UWw7jOAy7kBFQD-pxlqD3v8ZASQfbnTr9NkXRlKjzPKVfC4d1oEHzzna1Wnit89RYbvvngwDFHaatUjJwk-X5AO_u0qKpGtvaLzwXscXL0JtrG6klihtfy3OR2xI9ABTTrEphEE6J2yIW93_U6SIpHpnhCNhVMi1W6GvplLRnpWV3Kn3ZdIlipYChjrxK9pLsIEQBTTcvV4lb0hbsw_zlaD1gCYFWIVhucWP3IngAQjdFVwZd35N6_3Fbwf87-V4F-lXBwzrDLN2L7IgV08JS0lVEvW7rbT_aGO1VIU6HxzCep-09ySH-NPCHJzm8H7O8eH2voQ5AVRuFNs26sXs3ang__Lt3ZO91Dy-YISZRqTfv_m99EMpUSPg82Q8NgjHiw7RfRshkUx2gV3TUe-J7FSIjucWb0tVQ-zE6mVh--aa-B08g_w5OveNi1roW77GEMGVWJWeWd-plUVc8SJpAftlosXwaPZUQhgqXThrq6uJYfDB_kmkBlBqcOuKvw-IP_k86vywdPfuTIpPQr1v3cEhlwmntlrwTel-5h59OML_8fNhHmWBa5n_j_REgmWS6VkS7QIjrslk8gfmPga8_pywsi3kGAAA",
    "category": "Peaceful",
    "tonic": 4,
    "scale": "major"
  },
  "A02 (modified)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE31UW47kQAi7UCkyYF5nifr-11iR9Ghn1JX-LmNcBnOep_Rr4bAONNzY2VSrhdc6T41F2z8fDriQMG2VkoGbLMYDvLtLy03VvK154bkcW7wMvVHb3LVEceNrMZb7tkQPAOVpVqUwiE8JbTmW10OJA5LCyAwiYFfJtFihr6VT0sxKy-5U57LpEuWVAg8l8irZS7LDIQpo0lhUiVvSFsxh_nB0L5xDDK1CeNHixnKL9QMQpym6Mpz6ntT7j9sK_-vkexXcrgo_rDPMkiz3jlgxLSwlqSLKuq3X_WLFaK8KoROMYTxP23uSQ_zbwC-e5PD-muXNu9dQB6CqjUKbZl1YygPW__hnXwbewwvPEJOo1Jt3_7c-HOqpkOA82RcNgjHil2nfjJDJphJwVnTUe-J7FSIjuYXt0tVQ-zI6mVh--Kb7vZMJ5M_glB03c16L9yBmAmnqWZU-s7xTL8tlxcOhmEB-2GixWE-HQiaWhgpKpxvq7tLLH8yfZFoApQa6xoWnLT74P-n8sHT0yPakyCT049Y9HFKZcFrT0u-E3lfu4acTzA8_H_ZRJpiW-X-8XwIkk0xqRTQF4rgumz1onmj-NfD1D5li_zh5BgAA",
    "tonic": 4,
    "scale": "minor",
    "category": "Peaceful"
  },
  "A03 (A major)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE5WUQY4EIQhFL0QMiFBylor3v8YEuqdbp8RkFm9V3xKf4H3ftQ3AwqY4o4AD7psp-VgEsc1EWrO0memMpxvu0-T_pplIM7QOUkFxABeyzhNQCyLqhJy2qKWZ9V8iygpi-zT7v3nmpQbkyhYI4jVRfQFdseBZe7iryeZtNR078z4qXqd9CW-s4Y2HKzLDCZDVdBhLLly3frML1yJI-OFU9LXIPZm4_liN41ES7gWR6sSpm_vGseyjtjgOY2lSkHji3cWCIJx0MeGi-XQhhKvj9wl72sVEZTNWhy4mWoXH3TQQ2VZe_yOcqhevX-qpmygGcJHO_fUa7LqafPye5rPXpnnh_cu5FB_Hp_XsmD6RD-XZg0s-jmQfxvgBvQ8DbZ4FAAA",
    "category": "Peaceful",
    "tonic": 9,
    "scale": "major"
  },
  "A03 (modified)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE5WUUY7FIAhFN0QMiFhZi3H_25hA37zqVEzm43z1toUj2HvPZQAm1oozFXBA70zBwySIZcbTNUqrap3xtO7TZN-mGUsXhtJACCoO4ETaeAJyQsQ6Iadf5FRU2y93tIK0fZrt2zxzqwEJ-mXr4JrI9gJd_sK7dneXg1LLatr_nPdRsTr1wb1xdW88TJEqToCspl1zcOB17zcQUJMg4ZdT0dci92Ti-mPV26Mg3BIi5YnTNLeN42ArdHHsxsKkIPHEZ4oFQTiYYsJF8-lACFfHnw5bOMVEabNWhykmWoX72RQQ2Vae_yOcshVfH_JpmsgXcJHO7b4NdlNNtn4v8-FtU6zw9nAuxdbxbT1q0zbypTy6cMnWkfTLGD9DbF2tngUAAA",
    "tonic": 9,
    "scale": "minor",
    "category": "Peaceful"
  },
  "A04 (C major)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE32UW47DQAgELzSyeHUDZ4ly_2ussBVpE409vynhCjS8Xi_FCn8vObIZLRJeGQGNJe_1epnNb0ZEk6XWGuW15HC3bpQnYOICnHTe0CSrlfRCmGhepVfE_stHd1clRENobv5QXEelyt2rUUargT1uYJKZrYRRYqgpvIJbER2RTIhYqQUHu61th7szpaxVg47zX3rfwPx-V_9sRW1NbExIg4RpsfOhIz4iQLkLTIpPDfHxAEJZklZdZ0cUC7L18PEARAS0aOuHkMR4RKBc21JFTw-9YUlGKNmRrUOd7YBuNXCIiHtGI0td7KE0RuP_exgLRsOtNaUKzk8-sF8RjoZZdKdWwgMPreZ4mEl5pDeuiV-7t2FJmpJp1or-pGPWbOOR46Fq0YX2JB_SkaOhUu7UQF5J8rphyRQJpUVkX0kyWdiHNCcc_96F7zXq54KcFucWbtDv83EOe4ayX9r6uR5X7Pal--d4nOx1lTbs9-3w9_sP-NXYq0AFAAA",
    "category": "Peaceful",
    "tonic": 0,
    "scale": "major"
  },
  "A04 (modified)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE32UW67kMAhEN2RFvKqAtUS9_22MSHSl6ZYT_-YIn0CZ8zwVK-yz5MhmtEh4ZQQ0lnzWedr1zYhostRao7yWHO7WjfIETFyAi84HmmS1kl4IE8279IrY33x0d1VCNITm5i_FdVSq3L0aZbQa2OMBJpnZShglhprCK7gV0RHJhIiVWnCwx9p2uDtTylo16Lj-0vsB5ve5-2crcmtiY0IaJEyLnS8d8REByl1gUnxriI8HEMqStOq6OjKh6K2HjwcgIqBFW7-EJMYjAuXalip6ecgDSzJCyY5s9Ys1W9CtBg4Rcc9oZKmLvZTGaPx_XsaC0XBrTamC8y8f8K0GR8MsulMr4YGXVnM8zKQ80hv3xO-3t2FJmpJp1or-Swf2DybHQ9WiC-1JvqQjR0Ol3KmBvJPkTyyZIqG0iOw7SSYL9aDRX-fG96XrZ4NcFnhAv9fHNewZyv7R1s_2uGO3L90_y-Ni7620Yb93h38-_wBTpK8vQAUAAA",
    "tonic": 0,
    "scale": "minor",
    "category": "Peaceful"
  },
  "A05 (E major)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE32TW64jQQhDN1RqAeZh1hJl_9sY0cnNtJJKvstlgTm-3W7qK-S-7EAHLZ0l2mAvua_bzfS-ZJ4yTSucXtpLjhCBMQ2SDXSc2txp9RCRjDJPBbP6lHIv9W4ikvQMQDBayE5rY6vpUA141qnEXhki3tbwFBdpO7U815ajuqTCwpPGYi2MM00jKgtw5uh9OwWOc3O3FXZfemjTSQCkCujLx-x_Uv7dymfM95ywzSnGtBnMNqEozyGAFb6XhyjUvc2qEBz1nN13Z88xv8b1HYOckS9J9XcK6hBRDVFKuSXrQcx2vZp5vUgB1WRE3yjg2D4tqfiFAWfYa2gvCp6xfYDQY37Jrb4fr2fkF4zZ9aJiRWzBUBn3Li3QNQU_3HX6dknvBxo6dbuG90xkha9ZYPsjPjMcbP5-1HswOuUzRYp3h5ScX77Uf-pnnp4FMRF_sBpn-_SIZoUaDMiQ5tKp30eU-5MqZvT3DLFlVaeJBhGkOgMPAPdU6XTR0tj0CC-N-_0fWoJOhioFAAA",
    "category": "Peaceful",
    "tonic": 4,
    "scale": "major"
  },
  "A05 (modified)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE32UW47rMAxDN2QEkqgHtZYi-9_GhdJObzB15zs0QR-TeTwe6ivkXHagg5bOEm2wl5zr8TA9l8ynTNMKp5f2kiNEYEyDZAMdlzZ3Wj1EJKPMU8GsvqS1l3o3EUl6BiC4tL3T2thqOlQDnjVKYK8MEW9reIqLtF1aXteWo7qkwsKTxmItjDNNIyoLcOal36bAcd3cdYWeSw9tOgmAVAF9-Zj9J-XfrXxi_uYE7qQxps1gtglFeYUAVmwBxBGiUPc2q0Jw1PPs2D17jvkd1_ca5ES-kervLahDRDVEKeWWrPheg5q8XqSAamL83gKO7cuSir9qwAl7h_ZuwQvbRxF6zG_cnubbHD2R32XMrncrVsS2GCrj3qUFuqbgD3edvd3o_VENnbnd4b2IrMCaC2xPxCfDqc3PifoNRmd8pkjx7pCS68iX-c_8zNOzICbiz64-fzp6RLNCDQZkSHPpzO8D5f5JFRP9g-G2qzpLNIgg1Rl4FXDPe7ZoaWx6hJfGef4DgAxvdCoFAAA",
    "tonic": 4,
    "scale": "minor",
    "category": "Peaceful"
  },
  "A06 (A major)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE5WUDQrDIAyFLxQk_-pZSu9_jaEb6FyUVQiUNn15fn31ui5WMAbXGzDJsgBvuC6h9owExedq93xZvd3BBNxiwZ9b_ZWym2DtseLJYopN7BRLMJ_rsJxrRh5FQCc9Whm8DduuO9q9yq5b69cqvXvzNWjlYGffC4fefcwCn7LAIYdjFDg9SAL_kQR-RIAbgTJVbt1UwRCc2zvs5nkukISIZqP8xEQSeeaperONHUQDJDC124KkyYq9d1sG8UjeI0c79QhQi0gGr_EA_QZ0oqMhHQczaNex-kLnlBj9hTOnJ1KP4GzQ6wJHP8eIFnAM02kBmo24RWiUQA2sownEAzK7c8UCMnR0_gCMran5hEYF2ihM6sXnAl9-KrrvF0FDx76XBgAA",
    "category": "Peaceful",
    "tonic": 9,
    "scale": "major"
  },
  "A06 (modified)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE5WUDQrDIAyFLxTE_Kpnkd7_GkM3qHOJrEKgtOnL8-urvXcSUATjC3LibUG-oHfG8Qw5s6017tm2ZruBMpj6gj-35is1mqDzcTtZTL6JSLE686ndlksrme5CwJMe7gymYZGo29u9cNQt7WvV2R18Ddw56Nn3xmF2H7NApyyQy-EYBUoPkkB_JIEeEaBBoC5VRjc20AxG4x0ytbIWcMo5q95lJyac0AotNZsXxN4AdkxFW-C0WNH3butN3JM3z1Gk7gEaETGw6g-Qb0AnOuLSMVCFce2rb3ROiREHzpIeT92DE6CXDY58jhGpYNlNpzpoAnH10AiCDPaBuEMmOlf0l8wQPzh_AEb31HxCIwxjVE5i1dYC234qvK4XaiBPSpcGAAA",
    "tonic": 9,
    "scale": "minor",
    "category": "Peaceful"
  },
  "A07 (D major)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE32T623EMAyDFzIM6i3NEmT_NQqluTa4s-93iM8MRR7HwTqMzyEzKrI8icWcOWTgHMchdA5MKXNnCtPUoBqYBgins8BLpOzS-kpLE4BbsDpJetQeS1OrUswz1U0EcmlzpeXGkqsQmajHnsptVotL1KFAcWsVK600NZnMwkNE0_cOZN5_fQX4-V2b9R-S_joctnxY2-R7SpxDl09boystvRgJSvsKt2kgIdVijhDLC749vDf9Gdg-W2_bj7xq34OYAJGBEqHsGbfntdZAGpmQJAbn_grZ2BuZJN-KkG32mdq-B9XUR2KxN1Dt9a-HXvG1FIQmV1BIKjnk9rs5NPXSHqm9arG-M_XWnrm94Bsv1PD37CiGyfk520E9OSZxaJUhcMm5lugeHaurh4ABtfP8AR-1V_VtBAAA",
    "category": "Peaceful",
    "tonic": 2,
    "scale": "major"
  },
  "A07 (modified)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE32T2Y3DMAxEGxKE4U3WYrj_NhZ0jjUSKd8ePD0PyeM4WIfROWRGRZYnsZgzhwyc4ziEzoEpZe5MYZoaVAPTAOF0FniJlF1ZX2VpAnALVidJj9pjaWpVinmmuolArmysstxYchUiE_XYU7lltbhEHQoUX9laZaWpyWQWHiKavjeQ-fzrq8Dv79qs_5L0YTh0-bC25GdLHENzlbZGV1p6MRKU9hNu00BCqsUcIZYXfDt4b_q9sH233tq3vmq_BzEBIgMlQtkzns7rrIE0MiFJDM79FLKxT2SS_FqEbNl7a_s9qKbeGou9QLXrew-94udSEJpcQSGp5GjmY3LLQVNf2q2191osralv7d7bC75xoYZ_dkcxTM7vsx3UJ8ckDq0yBK44r0366FhdPQQMqJ3nH6qJwP5tBAAA",
    "tonic": 2,
    "scale": "minor",
    "category": "Peaceful"
  },
  "A08 (B major)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE32S243FMAhEGxpFBgM2tUTpv42VH9nkKtj8AsMA5zzPXKHlQjo8l_wKRrpwnsItl139HYZ0aE8rVMJu2nXT6G6zBcahAPeKFAvwFMhQhcUOcq8osUCe_tPjoPiPQIbsBOR2EKd7kiuUYdRKxPxXXacAQRPUwxWsV2g8wp4j3kM-AmUnUB4Hyy_U3RfqEGBrX1is4Lsr-ZuDgeHnC5R2CjRBZFvkO4ft3BJ-gW4UFZri-R1EXs2fJLJCHBqDRFsUKT9XSNPnV2LAuHIxaeQKKX0ROtSrvaKAxpTFL-mfx0V-sLgyMGGUBGmXiHcYNK4kGo7XH1c15XGSBAAA",
    "category": "Peaceful",
    "tonic": 11,
    "scale": "major"
  },
  "A08 (modified)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE32S2Y3FIAxFG7qK8ArUEqX_NkYsmeQpBn5tjrdznqcUWL6QjipZXo-RLpynUotJtfp-jnRYDxtMwt-0-03jd6stcA4B3DK4xgCeAIEZXEOA9AyPATL7T08Huf4ABLoD6N1BHO5BLjCGp5aiXn_pNgEES7ASjuA9Q-MS_izxLvIB5B0gPx0sr1B2VygDwN6usBih7rZU3x4MDT9XoLQj0BSRF2ei7mFbt4RXoFtFhaW4_hCRF_xpIiu0HSJGbFUkebaQZp9fxJBxtYVpIxeo90HosFr89TJopCxuSf8-LuLDxVUDU0ZNUIN2Fb4zDBtXiKbj9QdyfbMXkgQAAA",
    "tonic": 11,
    "scale": "minor",
    "category": "Peaceful"
  },
  "A09 (D♭ major)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE42UW6rkQAxDN1QEWX6vpen9b2NwMpdJcyvN_AVKEapjq16vl8RyvhcO7UDD1TrbqLXwXq8Xa1nujw8HXMygbErJyJXL-73k8K4MNyXODy4c3V0sV1K9te3U-9ZbxluNre4sIU6x2VbMA0B5qlYRCvEryYPYAUmxyAxDQM9byvL9LXXMo7xS4EFD_qXi8aB3CAGmqZVR4gyjy_fhbfx_UcynmdjYg1UIL9O45L5ctnI_APk3BeNPmL27D5w7yZHPguyzx7hrShpFaHWBpz6xiQlfFWJusAjeFoxHdpa2IyRZ2ivH_U7yy1RznG9D5ZfdqgMg2Si0MuvUGh60_sHvXJahuNH2-MIzRCUqefnuyfXhoCchYXOk37qAAXHDJh-9tGhFMkFV6UDODw4a4FbRUdfUZyxn8OzookSq0zVjiUzyFmuXrgbPNLO4uzRTzV_4KMv2tZdp588IaR1X32pvPu1UelalzzyvN0L34qnmf0OcXioqTDpdUZfzvvMypdQAigpzxvX67FdEppKf9N5_ALFN66FXBQAA",
    "category": "Peaceful",
    "tonic": 1,
    "scale": "major"
  },
  "A09 (modified)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE42UW27sMAxDN2QEFPVeSzD730ah5BY3RT2D_gUwQ9BHos_zlFjO18KhHWi4WmcbtRZe6zxZy3J_fDjgYgZlU0pGrrK8X0sO78pwU-L64MLR3cVyJdVb2y69b71lvNXY6s4S4hKbbsU8AJSnahWhEL-TvBE7ICkWmWEI6HVLWb6_pY55lFcKPGjIf1R8n1wPhxBgmloZJa4wuty2ehv_XxTfzsTGHqxCeJnGLffl2Mr9AOT_FIzfYfbuPnCeJEc-C7LPHuOuKWkUodUNnvqOTUz4qhBzg0XwsWA8srO0HSHJ0l457k-SH6aa4_wY6n3PfYo6AJKNQiuzLq3t-dX4PvhdyzIUN9oeX3iGqEQl-WFl-3DQk5CwOdJPXcCAeGCTH720aEUyQVXpQM4PDhrgVtFR99RnLFfw7OiiRKrTNWOJTPIWa5euBq80s7i7NFPNX_goy2pbe5l2fo-Q1nH3rfbm006lZ1X6zPN-I_YMZar5Z4jTS0WFSacr6nZ-c8cppQZQVJgz7tdnvyIylfxJ7_UFt6uKFFcFAAA",
    "tonic": 1,
    "scale": "minor",
    "category": "Peaceful"
  },
  "A10 (C major)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE4VS2w2EMAxbKELk0YTOUrH_GidCynEC6_prx3FcjzG47bQu2lu_P6d1pzFEyBXgS0tGUAAFTrxDBT4VlMnlnSGJG4UBvBQ6-frO0AM3pgAb9FQwpba9M2wqgA12eWj-zjhxIwcb2pVDA0n6TDIAfv1FA1nH_E2wIU4FDuhhSwWDHrbygHPoeaXAHHrl4PAKzlIawzN4_WowoPC0gZZUL0Wwhvyr9mym1S1dQ29PiLOZCqLi6uXRqjz1OV-9BPOzlVv9xnO-_IH56qQkHv1nWIl93z_nhjSYOwQAAA",
    "category": "Peaceful",
    "tonic": 0,
    "scale": "major"
  },
  "A10 (modified)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE4VS2w0DMQhbCFUBQjhmiW7_NarjSB9qrPKLMQZ7zsl2UntoWHzWoHbSnCI0FPQflggnBwyc_YAMfDNoo8F7hGS_kwMGKYYgiz1Cr35ncrBBb4YuZMce0RdDA_23hrFH3P1OA2yw1x-s7xFjfRJsGC8vDHzKl5vAK78Z2KGGIxkUajhKA_5D5JUC_xD1B4NXcIayMzyD25sDOM68ZKAllUsRzCH_or2S2euWUNePEuJMpqI7KpdXqtKP3_nKJZhfqfRy43e-9IH5yqSkeI-vYSUe5_kEe5Es8TsEAAA",
    "tonic": 0,
    "scale": "minor",
    "category": "Peaceful"
  },
  "A11 (D major)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE31U2a3DMAxbSDB0H7ME2X-NBzvt6xG5-Qog0pRo0cdxUJyAQ8qyVDnJWIvdAE84DtZNcdgsi_RlWtwCzVlXL8ZkIlLxMqCh9fHlOsvBpIPzrKqBBTi2gKsZZjBZEBpUURpMiuGszsCjKk0kWEWRwi5K9f3L0A-0rwZzB-6OFgVLcO45-iVwcZReQ3acTkcdzMA2vVmrQzGdujhRThmewqlqoWC9Uwrzp9Pwzqx1-WAxLyNDCpFL2IyECvxb4tcuRTuC-A7dmkSP3boTcmgFeqimJ4qt1aUCw6evNKySFf_XDnLUncObjqoTENqBm5NlE0LC9uh8Or_hNApKsPZow5mBvc9LoPa65G-PiFqTNntK3I6ye15mmt_R8mslaKb5PjKukXc2zVCbI1EIMhrH4siad2fTDPWNM18l_sVpdPhaPzmBgGaEb4jdW0Qzve_oPM8_vFRdZOQFAAA",
    "category": "Peaceful",
    "tonic": 2,
    "scale": "major"
  },
  "A11 (modified)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE31UW44DMQi7EIp4GAJnGfX-11gl3e6jQzpfI2FDcOxc1yXzQTysPAvQFFeUhhM_6LoUh-LwVTbty7K5RchVR5RyqojAopxkoP59uXsFuXVwXVWAPCi4BTwPo0puGyJDahamCniGIpR0VKWbTYWBZfqTUv35beAfOvYBD0JZ29pAnhTSc_A24MmB_C7Zcbo5CHInz57j7RyZS6knZ1ZIzkjTBHyCvFcKtH66GdGJtS-fPNZl5LRi1jJ1F5OieB_xyUuzXcHihG5Fkm9v3Qk5UJNjAhnJ5tu6UoR66SrDKxX8YzvKUXeOHuSpboAdfFFdZzuEULhtPV_KHzjNBAhtHx04K7D3fZmA30t-10ikFemQIdF2ldPzstL8F22fLCErzffetVc-c6o8WGQaK_s693XB9r4nmVaob5z1KsknTjNnhae2Y4VkRfiGOL1FstL7F52Pxxf5Q97g5AUAAA",
    "tonic": 2,
    "scale": "minor",
    "category": "Peaceful"
  },
  "A12 (A major)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE21S2xEEIQhriHFEHkotjv23cePrZN31E5OQALXWxCARhEBTgxjINAnEBrUSgiRQbpBCtJIFYpDxoQeJo1BcIbA9XukIjgeRbkrasiACmvuHUe71p5LptHWYdDcbiB5JQGxpTSjvSBnUXPnfmwtobIBBRla5XcpE-iRyG7w5epLFNeCRTD-JLlieRMwfyyk741zOvzwpyXqS_ufCvPTtGtzQJHJrjK9Nr-0zAgvIWROOG0huqHgfwZBH21OgMGjXEGYu33EfhjOO9HJKCyWP2of240z5yyL7Tq8LwH4C7Qdakvs1NAMAAA",
    "category": "Peaceful",
    "tonic": 9,
    "scale": "major"
  },
  "A12 (modified)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE21S0Q0FIQhbiBhRQJnFuP8aL6I-Oe_8rC1QaGstEXAEziCpQwxZJTHEDq1lBEaQ3CGFqLUwxMD2IYeJBlQHBNLHq8bQw0i3JO2ywAxSxofmMvBnJZU51lHmu5kxhiUGrqvWpNK2JCCuN_17UwWJHTCweZ2wY_JiOid8D3hr5DiLa8HmTD6FzliZQiwfx6nb4zzOH56SpMPJ-HNmXvX1Wtw8kmuC8XXpdX1CIAK2HzODloHk9oJ3CKw86t5CDia7ljB9-Y47GG5wzK9J82LRA_sKoY8pfY1IvtMrATgi0H8BrXYtNAMAAA",
    "tonic": 9,
    "scale": "minor",
    "category": "Peaceful"
  },
  "A13 (E major)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE21RyQ3AIAxbCFU5OWZB3X-NioCAROVp-SB27x0lqbwJntIyaYI39U44AJ7AowZlR0PD6qHhI829OhgMTkWG8VHRNOe6aWWA3qnlKOMYZgyBpHTCJKpkhgklhR2mkaWTddUyWPFLsaV8WtKtyr-qq7Syzoek5Xy8xi9V1xIZehVQU4uKFgoyS4FrLogSXEOLVbgwm9mx4s7mjO5sxHC3ceh2WbtT3TqDebZxEXmdji6A_wLYCEsn_wX4uGl9y8b47wco15I0FQMAAA",
    "category": "Peaceful",
    "tonic": 4,
    "scale": "major"
  },
  "A13 (modified)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE21S2w3AIAhciDQiojKL6f5rNIpRIO3n5R5y1zEGFmB6IT1NamZIL4yRcQKkwMMLqo6GC2uXhk8R9_XFEKfKEyO6qqzm1A-tTdA7SY0yimHKEGC8YSWqioYVBE4njCOLlWVqmaz4pNhSvS3xUdVflSmtbZUAt_vwHp_UXUt5oaaADhIVEgpSSzFzpSjBPXQxV-Ga2bHizssZ2Z6NGO7WXyEbl717bke3YNI2DJH26egC6C-AitGV_wJ8nFpb2Rz__QBjSe0sFQMAAA",
    "tonic": 4,
    "scale": "minor",
    "category": "Peaceful"
  },
  "A14 (A♭ major)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE4VT2W3kUAxrSDAo6q7FmP7bWMgTJJOsM_kzYPEQxXeeJ03CJfMhOGwSgzCfGqe14CHnaZBIyb6fOAIIdYdxqK0XIsRLYn5BzEyzw0iLsfEL4uIjqbcQXRFzjkWwlXhCQkIl7RbCA0BHmXUTBo0LMm-W5apoqWdVOhK2ELYEJf0WYquSHV2KSDrqT2N2BJQAy83bqbkQ_1xfj5iuDDfi-qD4qvzM2HlL70sPdiOj3ZbxPB23s3EA-iW0jGv-l9n4nufOar9ZNJfdSsupSu_nBRhv4sw1353q4fDMpyGIp8R9_WpFXtO8EHxTv1qNlyPzz_b1AZAcNMZY_emKEvd79Gq8BPsskolD4jpbTU5TsywYVimzGohKNc0ufmjcss8RYBSh6fvrYreQLfdVoC5_fV8mio3pJdhnTHX_2PZJ04Hwzsn-qMWV5n--Vdf4qE_o9ID2ePwDITL7IFUEAAA",
    "category": "Peaceful",
    "tonic": 8,
    "scale": "major"
  },
  "A14 (modified)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE4VT2Y3cUAxrSDAo6q7FmP7bCORZbJzAO_tnwOIhiu88T5qES-ZLcNgkBmE-NU5rwUvO0yARkvU8cQQQ6g7jUFsvRIiXxPyAmJlmh5EWY-MXxMRHUh8huiLmHItgK_GGhAQk-QjhAaCjzLoJg8YF6Q_LclW01LMqHQlbCFuCkv4IsVXJji5FJB31qzE7AkqA5ebt1FyIf6-vR0xXhhtxfVB8Vf7P2J_pfenBbmS02zKep-NxNg5A_wot45r_YTb-zXNntT8smstupeVUpff7AowPceaa7071cHgu8VU_D4nn-tWK3NO8EPqhfrUatyPz1_b1AZAcNMZY_e2KEs979Grcgn0XycQhcYVVk9PULAuGVcqsBqJSTbOLXxqP7HMEGEVo-v662C1kr4QtUJff35eJYmO6BfuO6TlS3SdNB8I7J_urFv3oW3WNj_qETg9or9cfhlFglFUEAAA",
    "tonic": 8,
    "scale": "minor",
    "category": "Peaceful"
  },
  "G01 (C major)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE5WWW67iQAxEN9SKbJefa0HsfxujTghDQhx0f1Ak2qZyXO3i8XhIPActApNS5nANskwb9ByPh_hQn99zRamlGpG6p8msMRJAxYOUWEvXCh3GXcX-DKUkqVoLZBi6gjAKIkliFlLdCmKYzQKUZbEXERUQZIOX_dmTnaxyFqDRw4sYswcDJkRh6-Fd_1V3I1YicxJRyk0_quseWuFuASmrnC-5it-AfreXO61yom26i82m2xE27qTKifNbqjVScc1ZrtvjkrO_pnh1_sTZN_GtT7CEsQOVXpJMk_CtT3Qh4vRQhkOYy-7Y6yImTJRKgDPsB3pdThfjjr0uYWIeXghVdr1TYsvHZUiOrbN2h6-wV-s_O2IvWgu0YW4n5uthqaENFL9G3ljGT8h1w-LDqCs4Xo9VOreryE_U7bDsvtXHFXhpRhqLGAhqGmzC216EjvkS182NIB4VSHOhbarZNQ_Dx6A25TG2Of3vwbNnjFyIENCUEFeZLuztlVN4ee6fL6N3h41UiD3JQ2aK9CbPK9zd7OvIelstTQjVCfXu8W7udUTNvNuqcXk1tNsAor_wZjoBx68EoiN0v0-gmZ-qMKZAuOQtdp7h-ZXOHXie4alFXE6RCn6T7wuMjGHI0EzMyzPFvLboZUGYwTNZuWRfATycGjiyfGbGVN67l-XS69UudZYr9N12ZPkT-pmn56zuOKID35kMR_D4YXnGiTt-eV6P3O3e8zNNLWHu4fOu6C_Pzzh18qJSkCLz1vO6hDnoHR9be3nlklUpKsKKCa4yeEaqG6w0gkXv1w3PTP3I6umum7HORP38W_WKyHZSM1Mvya8F7x-FoMoxeGbqwfDPf_tlaDbQCwAA",
    "category": "Happy",
    "tonic": 0,
    "scale": "major"
  },
  "G01 (modified)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE5WWW47qQAxEN9SK_Co_1oJm_9u46gS4JNMOmh-ERNtUjqtdeTweEj-DNlFIGXO4BSETg37G4yEY5vN3rihDGojMPSGzBiSqJh5kxFa2V-gAdxWv72qUJFV7gQxoVxCgIJIkZiGzoyAGbBZoIYu9iKhUgzB4e333ZCdUzgKldXveBMwerAohCuyH7al_1R3ERgQnEaM89Gt13cMq3BEqhcr5kLv4A-jv9nKnVS60J4FDbDbdzrD1TqpcOL-lopGqa86ybq9LznhOcXX-wtkP8a1PdAuwq1Z6STJNwrc-sY2I08NYXYW5cMfeNoEwURqpOiu-oLftcjHu2NsWEHh4aZix250SbB-XITmOzg1GLLFX6z-csRftBdYMFRfm-2GpYbHu7mvkTXe_ILcDC8aEuS44X49dOreryC_UcVp2v9XHCrw0WmITKKnBgiF87EW1MR9i3Ryk4lGhCRc6phpd84B-DOpQHuOY0_8ePHvGyI1IQy0lxE2mC3t75RRenq_Pp9G7wyATYk_ykJkivclzhbubfZ1ZH6sF3dkz6pfHu7nXGTXzaxU1m6Ua2m0A0V94M12A67cEojN0v0-gmZ9mCqbQcMlb7DzD81c6d-B5hqcVcTlFmvKbfPO6wDM9wQrNsEydl2eKeW7RZUEA6plsXPJaATRQDRzZPjND_c69LEuvV7vUWVbou-3I8if0M0-vWd2B1w58Y3nWM3j9YnnWC3f95nk7c8e952eaIhXu4fOu2DfPzzh18qIyJdPMW8_bFnCld3wc7eWZS6gyrQgUk7rJ4BmpDkVZBIvdrxuemfqR1dNdN2Odifr5WvWMyHZSM1OX5PeC95-qaJXr4JmpJ8P__APZkAZx0AsAAA",
    "tonic": 0,
    "scale": "minor",
    "category": "Happy"
  },
  "G02 (E major)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE5WWXc7qMAxEN1RV9nj8txbE_rdxlZbCV2gq3SeQGKyJTzzO4_EwXUKei6zWzjR2KCpYizyXx8Nq8R6_ZnuqppkmXSoWWV0EndlhkgbPTe9XpXQVEW_3RijD1Y_aEzm7XFW0GGapmzpeTn7V3VVSpcyU6IijeF7JsbJbJUJVsgTAkO9GtDMtkiVBAxesyYa7S8M0arONmFbubgopaeXGssPIZX9tGEkBxKIRSW5ynVS3tTtDM9BOtX4X90s8XNnZ6oQXK7XndDgaCDUA6iGk3_r2LzoHHF6Lu4MIkqaQ3UUtjitxrOxIEJTQpo6Sj8fu4htNrMmoNLXKNMk60Ewqn1u936haxlF_1Tl6Z9plBqPEVtt0YV2rz2B2jLUwL8HUynY3E3drUcUcTK3dXiblGp203UcttCt1r-_vIszYKcbLx6_6BKb6tiMq32iGfPfxTUZlTZItGWVK5nZCxLx0N8M6Ihildn_7dIQD25KBTGfcstERDg5zeEshq-7hKL7o7DCvjeOMh7d0dIz7x7W-4nKGR8e4_80S3PMZ406jVoqGlN7g4f_h4f_hGenwNzEPPp6TNaMjIlCOqgpQd-9bsM1Wj46gMHWJ2j_vVs8YfSOLpbAqO-fmjzzPmHb78TFz8YdujdAUs2bluz-cBLmOBND2fsX_lnF4-fmhVWsSKmWd5V77chs5d1O-G_BEh0j7_RLSnvAa2X1dv8-88jNSs12EkR6f-9Zyk3kYcfB3PfPWP0YcqIW1pFT667ixuEw2EnQCbJz4cnkAZ2Cyh1--LP08GrCmdSIE--cxXzf1u7o-T43bUccIEtFEQssLIz92YpiEIEaWCFNcS8M9jwcSbZaD4JnYDS9-8bpfUvCVVV3qFoHq11tjFoPw0Rpkm6EtkO-QvTYTK6s9U9GgeW8nvc5BxATTrPKZ0fvWXCPNlZXZYq62LdoD0uZlO4p6Cwwo1aE_v2H5fP4DIsTKTpwLAAA",
    "category": "Happy",
    "tonic": 4,
    "scale": "major"
  },
  "G02 (modified)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE5WWW47rMAxDNxQEokS91lJ0_9u4cNK0kzYOcL86QDkqpWNTfjwehiXkuchq7UxjB7SCtchzeTysFq_xbbYnkGZIulQssrqIdmaHSZp6bnpelcIqIt7urQGGw4_afi1nlwOCYpglNnW8nPyqu6ukCsyU6IijeF7JdWU3JAKQLFHVId-NoDMtkiVBUy66JlvdXVoNUZttjWnl7qaQklZuLDuMXM7XhpEUVbFojSQ3OSbVbe3OQIa2E9bv4n6Jhys7G071YiV6TodjgApTVXgI6be-_YvOAceuxd1BDZIGld1FLY4rcazsSKVSAk34NpHdxTeaWJNRabDKNMk60Ewqn0e9n6haRqu_6hyzM3SZqVFiq21YeHn-8gvMjrEWxiWYWtnuZuJuLYDOwdTa7WVSjuik7T5q4eWoe33_LcKMnWK8fPyqT2CqbycC-UYz5LuPbzKQNUm2ZJSBzK1DjXnpboZ1RDAKdn_6MMKBbcnQTB_N3bDBCAdXc_WW0qy6hwP9osObUNMzHt7SwbjuH9d4xeUMD8Z1_5sles9nXHcaUSkIKdzg4f_h4f_hGenwNzEPPp6TNYMREVquVRVK7N63YJutHoygMLhE7Z93q2dcfSOLBbUqO-fmjzzPmHb78TFz8Q_diECKWbPyPR-bBDlGAqC9X_G_ZRxefn5o1ZpUSFlnude-3EbO3ZTvVvXUDpEesXzHqye8RnZf1-8zr_xcqdku0pEen_PWcpN5OuLg73rmrX8dcQALa0mp9Fe7sbhMNpJiAmx0fLk8VM_AZA-_8RuXjwZd0zo1RPfP437d1O_q-jw1bq-6jiARpKaivJT74cfCWQjqyBJhiqMQ7nk8kGizHFSeid3w4hev-yWlvrKqC24RWv16a8xiUH2MRrPNtC003yF7PZtYWe2Z0Faa99bpdQ5qTDDNKp8ZvU_NNdJcWZkt5rBt0R6QNi9bK_AWNdUChv78huXz-Q_Ga0tlnAsAAA",
    "tonic": 4,
    "scale": "minor",
    "category": "Happy"
  },
  "G03 (G major)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE4WVa27ESAiEL2RZFEXxOEuU-19j1XZ2MruZnvlpmUdBw8fX1xfjEL8POzmJMBmNkoZ12Pfx9cU-AnuTU2adRfPsTjYvnzmCh_TaB6eZObJdWQ6Nls-dwaZTyramJ0zLmpXpiXEFMLWMfQ5hF10G64A302pqrujaRe_SlAqSR-G2ftMTP80wQhAWE8ynHvXORQaajcLoo3pq0aYInv_r0OUje10ET1aZpoPdEm5rnyM2ing-vgLmZFzhsQvfVeOFSFVAcb9xHLeev-FjqWfL2jms1ft_exS5c5HR9ev1oQKdZmsasqsKRiz7O_jfAnSyxgCvGMYIt6C5BG2GVEtQ5DisFJJfCXqXoGu6WlXp1NidIH7KHT7_7TlyqSdTYAQxeDTotZg8ZXJjI0G0X0PqczxcfCo62t3NJ7qPWhkkkgOIuhUtx1f662TbpP8O0SUI--gyhVsG2jh9bzA3G1xntxHu3pM19mO937E-zdK7JiLG0_szh3opSlZkRSViPmNoVhZZVBkyqu8V29QwJxucpIreZf2BQnPKiuVW3mK43kFozm73ZKYZimto3vYHtqTfYGjmRH2GEBapS909LZd-nvgthbBI3aF0gyPc-Y5CwMkmo6qb1Yj4sMNYqK42lQem6ubKjkLA2R0O2cAyq_0DhbBQ_fc0vcUQFqsfnJbdFa933iVZpH5q6lqYPSfAky2fcUx4rbd6cGinaLH66UBdLje0Xsbvjoyu8ABurGwphDgNlh6hGqrxO0YbLYvSM8VpG8x9NRgXhvL7xV0_oJXiP8f4-x-lw4TGdAgAAA",
    "category": "Happy",
    "tonic": 7,
    "scale": "major"
  },
  "G03 (modified)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE4WVa47jQAiEL2RZFEXxOMto7n-NVdujTHY3nfy0zKOg4ePr64txiN-HnZxEmIxGScM67Pv4-mIdgb3JKbPOonl2J5uXzxzhh-K1D04zc2S7shwaLZ87g02nlG1NT5iWNSvTE-MKYGoZ-xzCLroM1gFvptXUXNFjF71LUypIHoXb-k1P_DTDCEFYTDCfetQ7FxloNgqjj-qpRZsieP7Tocsn5nURPFllmg52S7itfY7YKOL5-AqYk3H1CLvwXTVeiFQFFPcbx3Hr-T98LPVsWTuHJf32KHLnIqPr1-tDBTrN1jRkVxWMuPqTrwvQyRoDvGIYI9yC5hK0GVItQZHjsFJIfiXoXYKu6WpVpVNjd4L4KXf4_LfnyKWeTIERxODRoNdi8pTJjY0E0X4Nqc_xcPGp6Gh3N5_oPmplkEgOIOpWtBxf6a-TbZP-O0SXINtHlyncMtDG6XuD6bvo3Ua4e0_W2I_1fsf6NEvvmogYT-_PHOqlKFmRFZVYk_kJQ7OyyKLKkFFd7yg0JxucpIreZf2BQnPKiuVW3mK43kFozm73ZKYZimto3vYHtqTfYGjmRH2GEBapS909LZd-nvgthbBI3aF0gyPc-Y5CwMkmo6qb1Vib9XaHsVBdbSoPTNXNlR2FgLM7HLKBZVb7Bwphofr_0_QWQ1isfnBadle8atglWaR-aupamD0nwJMtn3FMeK23enBop2ix-ulAXS43tF7G746MrvAAbqxsKYQ4DZYeoRqq8TtGGy2L0jPFaRvMfTUYF4by-8VdP6CV4q9j_P0HOL_B5XQIAAA",
    "tonic": 7,
    "scale": "minor",
    "category": "Happy"
  },
  "G04 (C major)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE4WWW66rSgxEJ9Rq-W3XWKI9_2lcuYGEc4HkG2vJXXaVeb1eiuE-Qv8GzUQpwIADNehvvF7vb4wigAwuliHW5U6azpUOTUR1vdZwHV43uAnAgDRUGjR98Y_iC5_nu9KiUk0XP4bzCLryZRIJERORE4mTLf5RfOHLTBfN4CqCkeXC23AafqOGTiJ2ovejN_xRfMHrPEuD2tvf-Dfy2Dz3zrLUsRoet3hrvKZHZZlCpMtFhsVwv9J9EqkTp1Olm65ZmT017zNdKwNaFhD1g27D-UqPpp_lWXQefq98NF0zokrNOLfec5je0nMeklCIKy8hJYdiWFzLa55EpJA1J9O99tJMzXTXzKgqM3vraMNupoRJZE4izizubY1vL8VMt8o0rWRofH8oU9M_W7w3vpVe_dEGNM3kKocJjgV-WAHmSRROKs4hXiw_-Dw_68UIwuoew_zWINwGjNMiLPzRyxXf_gvN4gLBvNV-vXqza3je4NuA7iTH3q92nJ9WmNuAXpnQQsDq2OHdfzwdSKD2VHIZ3B6s9wi2597D236lCS44LLEmq9bFZwlIMwa3-f7Jyk_xldzWy8qCwgK57cxzSHN7L0_mju-pzW2-1KwoqFmkfk9tbvfByd5h-SO1c6ajElAggLLvqc1tV5xMld9Tm9uv70w1yDlW7_Rpx5aTiQtL0ObY59jmtmxVwhTJqPie2kKTmE-Lad9jW2hmsBYFSM35h2eFJzE5ubiExJ59z7ktPDOoisxIhHjb4XzES-NPcSk_upfGaxFjLcWylHLP9lYcnZ_UltjTUvAopnX9J0R-3G-bGaLFDHK0IGd7X9jeg3LydKmM_QJ28cNTfZ5-Deg4gbneeidlTGI7WfFIv4dBxVxNCIMJ7n2clpQPp0FyEqtT7JcT34-a5MzQKoYRko7ww9NZk2r86Txs_wc92Xt-NV-LA1Tmth3ZPpvHKfwfH5PYnXL_rdhc8rzGmBleJTC2pD0EP4fzJru1jXj-PVsv7h26_Mi1p8wpxTUkiu3v7z9uXwScCAsAAA",
    "category": "Happy",
    "tonic": 0,
    "scale": "major"
  },
  "G04 (modified)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE4WWW66rSgxEJ9Rq-W3XWKI9_2lcuQmEe4DkG2vJrnaVeb1eiuE2Qv8GzUQpwIADNehvvF7HN0YRQAYXyxDrcidN50qHJqK6XnO4Dq8b3ARgQBoqDZq--Hvxhc_zqLSoVNPF9-E8HFe-TCIhYiJyInGyxd-LL3yZ6aIZXEUwslx4G4bhN2roJGInOoZe-KP4gtd5lgb1bn_j38hj89w7y1LHcnjc4q3xmh6VZQqRLhcZFsPtSvdJpE6cTpVuut7K7Kl5n-laGdCygKjvdBvOV3o0_SzPovOwe-Wj6ZoRVWrGufWew-SWnnOXhEJceQkpORTD4lpe8yQihWzv1MrcNlMz3TUzqsrMDh1t9Eb8C8ckMicRZxb3tsa3STHTrTJNKxka3wdlavpni9-Nb6VXf7QBTTO5ymGCY4HvV4B5EoWTinOIF8sPPs_PejGCsLrHML81CLcB47QIC7_3csW3_0KzuEAwt7WSoqN3_kZ5bgO6k-x7j93e9yvMbUCvTGghYHXs8OY_ng4kUO9UchncHqzjCbZx7-Ftv9IEFxyWWC-ra9KzBKQZg9t8_8vKT_GV3NbLyoLCArntzHNIc3svT-aO76nNbb7UrCioWaR-T21u98HJjrD8kdo501EJKBBA2ffU5rYrTqbK76nN7dcjUw1yjtU7fdqx5WTiwhL0duxjbHNbtiphimRUfE9toUnMp8W077EtNDNYiwKk5vzDs8KTmJxcXELinX3PuS08M6iKzEiEeNvhfMRL409xKT-6l8ZrEWMtxbKU0nrbO3F0flJb4p2WnSAPYlrXf0Lkx_22mSFazCBHC3K294Xt_VBOni6VsV9API7q8_RrQPsJzDXrnZQxie1kxT39Hh4q5mpCGExw7-O0pHw4DZKTWJ3ifTnx_ahJzgytYhghaQ8_PJ01qcafzsOmDj_dBqnma3GAyty2I9vq76fwHz4msTvl-7dic8nzGmNmeJXA2JLeIfg5nDfZrW3E8-_Zmrh36PIj154ypxTXkCi2v7__AAVUIB4ICwAA",
    "tonic": 0,
    "scale": "minor",
    "category": "Happy"
  },
  "G05 (F major)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE52VUZKEMAhEL5RKSSBozmJ5_2tsxYyzit3uzuTTAeZ1B8i6rlqSetKWfNrSlKuKn0-atrSu47fi1s7H05Qvwe7eo0c9s8TTLh9aW3pa9R59_ftOIFnDOUWXUChJNlCbkUgUUHcBczLZBQhLCwJ23XXB0SUK2IkqC4ZEb0uVpSEiX7ClCokW7KhGR0dpAqLfOaqR_-nWDOEz9y3_o0X1mqXJEE8lDtVo8W-D3nkq9J4orRA-mHmDr9BMwfCO4BmPB_jypNQJfHdeE7svh86TaZlhJwju-jmDzqzEljkvd6XvthmSb8tyzmivEfYF2nOsY2Zqe1LY4PUQhS3M9YAl89kCrB2wey_yrA_8kInTw-in0aiKR0MmiKTkMRE42QxJkABrNBpZenSYkfEQQQKMdIsUiMRqF4j04qG3LPHxeX7Ole8QcAPKuxTWBgLYAIjCGR8Lyo8WusvVj-TGx-pRrQW1o9_2gYGlwQi8olHtvzda00uM9KwodvsBqOYqWDYKAAA",
    "category": "Happy",
    "tonic": 5,
    "scale": "major"
  },
  "G05 (modified)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE52VUZKEMAhEL5RKSSBozmJ5_2tsxYw7it3uzuRzBvB1B8i6rlqS1qQt1balKVcVP580bWldx3_FrZ2Ppylfgt29R496ZomnXX5obdk_4j36-vlOIFnDOUWXUChJNlSbkEgUUHcBc7KpC3BhaUHArrsuOLpEAT3YjQVDosNSV5aGiHzBliokWrCjGh0dpQmIfueoRv6nWzOEz9y3_I8W1WuWJoM8xKEaLX436J2nQniitEL4YOYNviL4EXyHdwhPeDzAlyelTuC78yWx-3LoPJmWGZopuOvnDDqzElvmvNyVvtvG4bKcM9o9hH2B9vyuY2Jqe1LY4PUQhS3M9YAl89kCrB2wey_yrA_8kInTw-in0agFj4ZMEKmQx0TgcDAkQQKMPT0CLT06zGaaBgQY6RYpEInVLhDpxUNvWeLj8_ycK98h4AaUdymsDQSwARCFMz4WlB8tdJerH8mNj9WjWgtqR7_tAwNLgxF4RaPaf2-0ppcY6VlR7PYDMH-YpDYKAAA",
    "tonic": 5,
    "scale": "minor",
    "category": "Happy"
  },
  "G06 (C major)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE42WW27sMAxDN2QEkqjnWgaz_21cOEE7aSJnbn_HoWnz0Orr9UIN4_egLSqIYRAFczAGvcfrpT5_Q5kogQMsHCUYtGlVuHuKCHMa9tUY6sOs19uqygC4qgqCfH5ybH7fgOcGICJ1d5j5ST9bfZ765B6SmRrKsutbry-bViagzExW4jZXo4ajVZetKp2ICpDgQ_zRD-YXDKhFeGmKff3Ets8GbGL144na5b597sdiGn-9Dvv38_pmRAKAIyKTDzM6NIdLqx67HPVycc3_pLc4XFzy5z2eBV_ZxY-ldl6ylyfvdYl-P-gMhVbydQkfT9Z5diPhHmGmKZUn_b4aTBdWdN9gESXPbkQRMfZT7_7XPeZZjHtUK_cyQfFPVGdqF-7RcLjsNS4g_kex9anIrBcU47nIrB2Hzwasw-v5E--QWQPM0RGwIpizIeCRYM4OgiXCsyKhgJEqQPqd4FmRECJOd1MRfyJY6AJBnhCWDaWgIHUuLyEbwpOw05_-BtA_1nzJ2L6sl0vAxzDQ5Xpc0j0gzsVp9c-DcExKHrqW1w6Gpbx1MOz61s8NsRaGRWPFGxig4wj3Lu5_ScDjFJ5zxMs9PTNMKU_mF_qzKR6AGVO5VTyan03xD2wp328nW3hWt19_J9UxqGoZbbVPyUIc1I6q4-Hp3YM6NFfXgzlKTmjS-WXr7x-zW_dZtQgY8_-sblb114NZxPus-p0-vFmFFIwRbqHFA7OLt5dn3XXMcn348ff7H6tkk_IGCwAA",
    "category": "Happy",
    "tonic": 0,
    "scale": "major"
  },
  "G06 (modified)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE42W243rMAxEGxIMksNnLUH6b-NC9mLjtSnn5itApBHFOSPm9XqhhvF70BYVxDCIgjkYg97j9VKfv6FMlMABFo4SDNq0Ktw9RYQ5DftqGerDtNfbqsoAuKoKgnxuOQ6_H8DzABCRujvM_KSfrT5PfXIPyUwNZdn1tdeXTSsTUGYmK3Gbq1HD0arLVpVORAVI8CH-WA_mDgbUIrw0xb5use1zAJtY_dQ0vzTLffv0x2IW_nod5d_v65sRCQCOiEw-itGhMbz3P_b2VS8XV_9PeovLxcV_3vUXfGVnP5baefFenmqvi_X7RdWH1kq-LubjqXSe2Ui4R5hpSuVJv48G04UV3Q9YWMkzG1FEjP3We_3rHPMMxt2qVfUyQfGPVWdqF9Wj4XCZa1xA_I9g61OQWS8oxnOQWTsOnwuwDq_nLd4hswaYoyVgQTBnQ8AjwZwdBEuEZ0RCASNVgPQ7wTMiIUSc7qYi_kSw0AWCPCEsG0pBQepcXkI2hCdhp4_-GtA_1nzx2L6sl4vBxzDQ5Xpc3D0gjsVt9c-DcExKHrqW1w6Gpbx1MBz6_dwQa2FYJFa8gQE6DnPv4v6XBDxO4TlHvNzTM8OU8lP8Sn8mxQMwYyq3isfiZ1L8A1vK9-5kC8-q-_V3Uh2DqpbWVvuULMRB7ajaH55F9aAOzVV7MEfJCU06v2x9_zGzdX-pFgZj_s_qZlXfHswg3mfV7_ThzSqkYIxwCy0emFm8vTzrrGOG68OPv9__AEHrbcYGCwAA",
    "tonic": 0,
    "scale": "minor",
    "category": "Happy"
  },
  "G07 (B♭ major)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE4WWWY7jMAxELyQIXIrbWYzc_xoDyt2ZLLL7v0KT9YpUjuPQGKjH4GmVBpVQNUKwDHqM4wAP4DFoRkWEkBsLxIgHzaoMhpuUuVRy61VWuY1eJhFBEihimEfLjVvLFQUFEEoU0VpBqYWKI5K74nGYXmhRKelCWuBQwhLjQhxGwhCBUUiqr6ZjmF80XVUMZeIKSrfliQz41Zg6qyItwlAS7HrvCvoDFmxGp_9LTsNyy8Ta9Jdhn-1si3v3QkRpnpUky0b1VXwjjw-ii5DvCeUUhENNCVwZq7TThRblFgKKTO1ej-NsYSMNpP3Pib7gkanlyqaaCISwj-wBIaVkxWJl95GtWeUMLcv0zFpJ0dhqmT5AnmRqdLI2ZJi7-MeU12i4k2WSQU6pFf5SfSfXD5R5YyJjCqykQqHOTfA4zoDvtCikpTOnGJfcbA9jBjzSXUWLAk88uu-60_0abn_yudoH7oQDSuySTC72xyf8g-mJSUZflh2mDvnrvL-YLnzvhH0eot4g3svrnaqtFTpH_b5FNAUQttJUUl1pxB6p0EQpA8kW7j-ULo4nzfi9bqqCOC057_xmiaSTDiIO1iinTsrdFkknfZ029zBRu1sjkQ-ees9HOuifg17zkU4YpxU8Q1Tkno_YBucVHp_rV8_X4g6PT7w9E3rHx2dA1YpAEhD63aLzHc4AHNAM5SjK1leJZBRHaETGH3w64kwkFuQFSr9fIcktzxMRzTe_eEhH_GvURejKde2AnW--uOPnSi_X366J2VBuI796l6E-Tu-_q3ccXyLAL38svsrLRFZwiKgb6bqiYuN6ObTzSxZgYY8ytsfjH0DlEKM2CQAA",
    "category": "Happy",
    "tonic": 10,
    "scale": "major"
  },
  "G07 (modified)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE4WWW5LrQAhDN9TVBUK81uLK_rdxq-2Z3Dxsz7-CQUfQ2bbNcrAfQ6d3OQ1p5sJUDHmMbaMM8jFkZmcmJFxBuOiQ2V2pDEd7oEuX3rCXO9FjighRZIvSI5fcdWm1s2kk00QylxZs8zQEs3RV3DbHhZZdqIBYU9OEu5gX4nSBEqBLoiz2pnN4XDTd3UpT0U6p8N0TDPrVmDa7szzT2UgNu3eF6wOe6i6H_7tchucpE1-mvwz7bOe0eKxeRKQ8qkuw22i-Fz-R5wfRnVCcE6oJZtDchNqVB6G-0LLDE5SsMu6WHy2cSJPl_3NiL3gwrcPUzYrJhMaoNSDRJt4Kb7-PbM_uUFp7VVT1nhQ7N0PlA-RBpsdK1gkZ1VX8Y8prNLqS5aiUkLLOeKl-JrcPlHVjonKC3ug0WugiuG1HwM-0bJZXqBZcGzfbo5zJyIowWEvyiQfnXa90v4Y7nnyu9kFXwkkTDZRKwP_4RHwwPTBhrMtyhmmF_HXeX0wXvq-EfR6itUF6Lu93qgvQth2jft8imSCh3lYmZnsaeY4UMtmmZKlnxA-li-MpM3-vmxmYhyXHnT9ZIqykU0RTLTtkJeVui7CSvp-2iHSY360R8MHT7vlgBf1z0Gs-WAnT8mZUwoB7PvATnFd4Yu6_er4Wd3hi8u2ZsDs-MZNm3kJBEvK7Rcc7XEkGaZWm2VJL3w1UtmZaZuUffFbEVQSeEk2puF8h1CnPA5HMN790YEX8a9Sd0JXrtgJ2vPmI4M-V3l1_uybuw3QZ-dU7hvk4vP-uvuL4EgF9-WPxVR6T1akJWLjYfkXh43o5bOVXPKnQyHb1x-MfIuIvrDYJAAA",
    "tonic": 10,
    "scale": "minor",
    "category": "Happy"
  },
  "G08 (A major)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE4VV2a3jQAxraDDQQR2sxUj_bSzGfoffxnbyFQS0TFEks22bYaBfQ6ey4XChhFe1D3mNbfMc0NeQWYwqAlosherQKSLZUh5KiLAWHrHAyqrwKO9gZUcPnWCndxhTla07uO7AhW7pUocK2uObiuxkL9mQzepmmTQ71xMh1_NtGqigtIqsV_mOtjs0SFdaoiVI6R19s6jNAtEEOgXgPtp1UU-5pG6TZAbTDWJk7NxzZ-OMkFJUKcNLc_gMOX92IV2H50hczvdJnn-09YRhZF3CsZQ8X2oX3zgyLm0Sk0x6JjUtGbs67sPzcnwuNqkFyzbhIrFteSNmTbxTP9a8AhdarVhtmih8EYGOQ8w3LrVWNbamiYK1Uz-u9D6-p6GR7YhWXzbctuAdFkyLYCTcCD4PLiQsFWKuiM8X7fnXMN8e87jblEt1q5KgmTN_XKnjMPJ7oGSSERVmat7c1bwvC10BPK0cH8rD_romH7vD53ukbrvDZyEkkXlw9M_dsRIS5ujwhNLxVB6KaQhIiBcg8H4qD8XEWUbnU3koFvn6Hf-5PXTlNagR3e1B4Kk9NCboXe7tFk7Nj2bTFXCYeoV0CE2f-0NXwv-_1n196ArhuV3ruT90mf9tg2PfC0G5rHMi_xRE5VySt9OR67E6pYTXbLiWjYBqA0U72Nz978g0mEPLKFnOo3Du_ndkghaqVOtcBO67z2T-NGrm4YF1InkNm_5zC-swX2DuX60FaZRdld1l60T9pZU21-tr2Mq2h7toZCT19foHeEBA_DkIAAA",
    "category": "Happy",
    "tonic": 9,
    "scale": "major"
  },
  "G08 (modified)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE4VV2a3jQAxraDDQQR2sxUj_bSzGfoffxnbyFQS0TFEks22bYaBfQ6ey4XChhFe1D3mNbfMc0NeQWYwqAlosherQKSLZUh5KiLAWHlhgZVV4lHewsqOHTrDTO4ypytYdnHfgQrd0qUMF7fFFxbmTvWRDNqubZdLsXE-EXM-3aaCC0iqyXuU7Wu_QIF1piZYgpXd03KELRBPoFID7aNdFPeWSuk2SGUw3iJGxc09bYGeElKJKGV6aw2fI-aPf83OkX873SZ5_tPWEYWRdwrGUPF9qF984Mi5tEpNMeiY1LRm7Om7D83J8LjapBcs24SKxbXkjZk28Uz_WvAIXWq1YbZoofBGBjkPMNy61VjW2pomCtVM_rvQ-vqehke2IVl823La17DUWTItgJNwIPg8uJCwVYq6Izxft-dcwPx7D3aZcqluVBM2c-f0EdBxGfg-UTDKiwkzNm7ua92WhK4CnleNDedhf1-Rjd_h8j9Rtd_gshCQyD47-uTtWQsIcHZ5QOp7KQzENAQnxAgTeT-WhmDjL6HwqD8UiX7_jP7eHrrwGNaK7PbhEvG8PjQl6l3u7hVPzo9l0BRymXiEdQtPn_tCV8P-vdV8fukJ4btd67g9d5n_b4Nj3QlAu65zIPwVROZfk7XTkeqxOKbmxDteyEVBtoGgHm7v_HZkGc2gZJct5FM4Nd5MJWqhSrTOODrnpPpP506iZhwfWieQ1bPrPLazDfIG5f7UWpFF2VXaXrRP1l1baXK-vYSvbHu6ikZHU1-sfi4Te0zkIAAA",
    "tonic": 9,
    "scale": "minor",
    "category": "Happy"
  },
  "G09 (G major)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE31WW7LjSgjbkItCgHisJZX9b-NW28nMOXPt_slPBIUlJPr1enm8DxUfThChcKAzeej72PwpVO2JYHhbW8aJ7ns0RBXVPdqVTNosdOAJTVWbBhGpE4aFXjWQVI0qDXMvasVhqzXGUtnhlZ0LTK7WmJoylmqS426Hyz-dz7FZT2ijh3UFWrWdJ7ifwFTv4mTPmEUvcOoTuIjxmo6YhF3sxcE-0t6HiU_Bq4JTMeQRa3BvGpBd9NqJE2sUq8lMLfX0nTYU1UAFTIOOHu60oVCp2axoT0VupElRdVY1ig7XE7s-746RElV6Zlna5CyWX681-T3YyIYPPbq97ATzfuQSaloCrVlTfXGdJ9cPJS2qBTL9U_opST3WSCZQeCEmy9Q9jl60ZEZXFevcbp_73iN_vgOhZbWje2QxSa9OmpOxoRsqa0mjLXQ0_RrjM_Idi1i2rJ-L-JfGW7SxMYMkiqNbhbBM3BnpY57l5jvxAVkdxxNDdl1Ocz9Yx7LQ__2A5fthaEcWFXFx7g-JYkJoOF0Bt6ncKQSXD4wk2IptWi3jT3vPtAE6u7RCiELLPWgcn8s_6yufmKEojGaecA5ztqxTvvZprqnOfdn0JqCO1FDGlZxPiQVKJaK6HRZpl-fOyLrVJ-V3LG8DCymEten39_LbA7jkl_tWsG1OT8mfsGcn1no_y9PyrQxrBH13TDCyFk-L5RqFyxFPxwQjlnRGf5J8d0wwcm6eqVXYzGWIR21GKtNijJGGj3s218RUFJmT0WhYXWn7pI7pGsaUZUFt5Y5vw2qNv_d-m28GIXIm0t3KS3cBZya_XxG9225bLi4bq47yyMidc8zFsiq-j4kfUXgztQvR6DIfoOLa7e1FsWX80UaOn6-bb83jSbEQYuaH6XaZZRQ17dJUs-T-iNsy_r-vj0W6ynh5N8ZNDZF1WK7Gny2M0Kz3-z9uiEJeNQoAAA",
    "category": "Happy",
    "tonic": 7,
    "scale": "major"
  },
  "G09 (modified)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE31WW67jUAjbUIQwYB5rqbr_bYxO0s7cO0rOT39qkGOwOa_Xy-N9qPhwggiFA53JQ9_H5k-hak8Ew9vaMk503aMhqqju0a5k0mahA09oqto0iEidMCz0qoGkalRpmHtRKw5brTGWyg6v7FxgnrQxNWUs1STH3Q6X_zqftJlPaKOHdQVatZ0nuJ_AVO_iZM-YRS9w6hO4iPGajpiEXerFwT4S78PEp-BVwakY8ohF3JsGZBeX0M_DiUXFajJTSz19NxuKaqACpkFHD3ezoVCp2axoT0VuRpOi6qxqFB2uJ3Z93p0iJar0zLK0yVkqv16L-T3YyIYPPbq97ATznnIJNS2B1qypvrTOU-uHkhbVApn-Kf2UpB6LkgkUXojJMnWPo5csmdFVxTq32-e-98jf70BoWe3kHllK0quT5lxr_Sg3VNaSRlvoaPpF40P5TkUsW9bPRfwn4y3a2JhBEsXR7YSwTNwZ6WOe5ea74QOyOo4nhuy6nOZ2cGl-5wcs3w9DO7KoiEtze0gUE0LD6Qq4TeVuQnD5wEiCrdim1TL-tPdMG6CzSyuEKLTcg8bxufyzvvJJGYrCaOYJ5zBnqzrla5_mYnXuy6Y3AXWkhjKu5HxKLFAqEdXtsEi7PHdG1u18Un7H8jawkEJYm35_L789gEt-uc97e3pK_oY9O7HW-3k8Ld_KsEbQd8cEI2vxtFiuUbgc8XRMMGJJZ_QnyXfHBCPn5plahc1chniczUhlWowx0vBxz-aamIoiczIaDasrbZ-mY7rImLIsqK3c6W1YrfHv3m_zzSBEzkS6W3npLuDM5PcronfbbcvFZWPVUR4ZuXOOuVhWxfcx8SMKb1i7EI0u8wEqrt3eXhRbxh9t5Pj5uvnWPJ4UCyFmfphul1lGUdMuTTVL7o-4LeP___pYoquMl3dj3NQQWYflavzZwgjNer__AFUS2KQ1CgAA",
    "tonic": 7,
    "scale": "minor",
    "category": "Happy"
  },
  "G10 (A major)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE52VbXKFIAxFN5RxyAcE1uK8_W-jU22VR3PBV38nJxLPxX3ftbwobdqs9I9TetG-WyJTsgpKtpxY--fuySnu4a5EQMmIla5H456-JIOSEdu1eNxyljBZptxASUTVQuU4vzd_2w_ZNTTG2eQlj3MVygtEHhDHyPOEPLyOUt7c2mzenxOUxfgSjVcm8xDn14pjnIc44GxdO1snCwbKtrWybUIFe-K0VpbT584yr6Vl_sxavuMFgLNwxR6xrpg6Z_KW2_tDfNpRyRgww3xpIUPX1ZE2zaTAJ84hEc0vFw5_9DFBXQtalXc16Fb1z7H1AXYMVNeCdtqupcOY8pion1sEMSXdcxFTxjR1LSBMwl0N-q-MYbqVOdwOPBVZWCVjnlYaykpk0ZAIPBVbeyqGzw1_03ltlOR_cMsDbplw0dZ8rap4vFl4sUl9IFWdSOWg58zVPANjrh4sQbtsoeXqmK0HH-1bvt_lIsn0b7heX7KciNy1CgAA",
    "category": "Happy",
    "tonic": 9,
    "scale": "major"
  },
  "G10 (modified)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE52V63HEIAyEG9J40AMBtXiu_zYysRObI1rwhd_SJ2vZxfu-q78obdrM-1MovWjftZEpWQUlW06s_bl7cop7uCthUDJipevRuKcvyaBkxHYtQIOjxJjMKAMNNKQ6-bF_aeVNH7JraIyzyUceeznlBSIPiGPkuSEPn6OUt2JtNu_PBr4Y79F4ZTIPceWSOMaVEAfuq649WycCA8u2tWXbhAp04rS2LKfPPcu8Ni3zZ67lO14AOAtX7CPWFVPnTN5yez_EpzsqGXpa4nw5aQMNZ9qMFEmZQyKa7xcOX_qYoK4FSVW6GjS6fI6tD7BjoLoW9Atol-gwpjwm6ucVQUxJ91zElDFNXQsIk3BXA14oGcN0W-bwduBTkYWrZMzTyoayMrJoSAS3Krb2qRjeG_6m-xo0O_-D6w-4PuEiW5W1VaXEysKHTeoDU9WJqRz0nLmaZ2DM1QMRtMsWElfHbD24tG_z_YqLTKZ_w_X6AmhKasq1CgAA",
    "tonic": 9,
    "scale": "minor",
    "category": "Happy"
  },
  "G11 (B major)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE41WUY7FIAi8kGkUBPUszbv_NTZg3y5SMeungTKMw9D7voET5U_KVxtt2JPyJ903YsKeKqRK26By5ZztTZOs2iQYmJZgTuVCBDRHg0cUzOsdKaAHTYS6XJJsjtYg2NeAy6J5AFGNgpnZXtWHoZnwgoLCjYVyQoIXYn0hyVEwM5kPk7KOLdWcKqZZY4NnjGEqAJ26rfJW9kqDKQq2fT6tTjDyVG2Lh4Qfi0crBGogeSkPh0sUzNwsP9opcOI9M3SN0f3Hf6UfwGeh05y-yDOo1N289FMbfTcuEUHdj4vCKRH67uaknp53uDGBk3CGG5PJCymZGMEp2Q3LnC1NqS1NYLusVdL4bTqIBye5Ux9FzcFenea3gNMcr20HbgVOee3oiGISYHV9MokiLsGem19G955V1CT-3bSYBL5UFAESl2geUGifRf3hJSQ1ucDhCu1UfV5gbSu8aaVhyqq648qTIZ4RGEas3vldK1H5sRFxWF5H179nKLDhRAzrXglEPJyIpyyjlZu3Io52bl5FDDog8tOyJwfUEXy_08qlRrlo9MXKEqgpmJQ_I9-XkJm1Ivt8fgBGQ26nSAkAAA",
    "category": "Happy",
    "tonic": 11,
    "scale": "major"
  },
  "G11 (modified)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE41WUY7FIAi8kDEKQvUszbv_NTZg3y5SMeunwTKMM2Pv-wZOVD6p5Gtcw65UPum-ERP21GpqtC2quZRidy451ViKgWkp5lQzIqBZWtyjYl73SAE9aCLUNcths7QHwb4HZIvmAUQYFTOz3WoPQ_PACwoKNxbKCQlmxPZCUqJiZjIfJmUdObWSGqbZY4NnjGE6AJ2mbXJXdkuLKSq2cz6jTjByVdcWDwk_Fo92CNRAclMeDgf8UGa-LD86KXDiPTOUx-j-47_SD-Cz0GlWX-QZdOrOL_00Rt_ZJSKoe7sonBB9dz5pp-sdziZwEs5wNpm8NCUTIzi1OLNMb-mRxmkC251aJY3foYN6cJI7zVE1HOzWyb8VnOZ4HTtIK3DKu46JKCEBVtenkKiSEuy5-WV0n1lVQ-LfQ0tI4EtFESBJicsDCuOzaj68hKQhFyRcpZ2qzw_YtRXejNLwyKq645MnJp4Vkc7EuXZ9n5Wo_diIOGyv1vX3GQpsOBHD-q4EIh5OxFOW0ZNbtiKO3tyyihjUIPLTsicHNBH8vDPKpUfNNPoSZQk0FMyRvyDftxDPWpF9Pj-_mQ8WSAkAAA",
    "tonic": 11,
    "scale": "minor",
    "category": "Happy"
  },
  "G12 (D major)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE5WWa47jMAyDLxQY1IN6nKWY-19j4aSd3XbsDPZ3ZEL5RIt-PB7aXweGdMHSI-iZSuWBr-PxMNt8HOqdGV1e5h1VZ3UczHmgmqHV0AxalRwY3k1aR0d0W8asd9mpJ0WESJZSGHJWx7paBoBqRSACoryTlqFERMPpTbSd1VYHOQ94tKo1UpXRYvMAAfeAwQwI9fOA7-STUDUIJQg7G9c-1X8qHXrHWMf174IQUqWuVjcUdBBiVmh0QyrvKOgnYL8DbP8D2D4B5wvw-ZvWgfQ2Q9OJWf8OTO2Or42kAikWXtT65ptLcR-AZLmomOJqfIfbN7ifzlhofwD3Oyw-G69u6RSn4_J_7KhwABoZUk-pO20OpTpNIkpo7m-WXtW_I38Sf0Jc1b9Dv1wrR-isbyv3LHGnWGkesYK-mWcMpZlTNT3pca2R2hWfBlEVNYFfzvLNOGMJHEdgfc9zRXx32XJJXA7Wcpo5CIe4pnaCk9vjMRfJWjtp2aLMAvl3hZzTYbeHZ1jAWilHDcAYpa7huHV4fcDuu1-sJWzZmqrGOT8zKQ8GfzF4j8VW3Rm8h9LVUqvEyLZfDN4fvOUXg_cH8tc0sWxdsEC-ywMMJUXbvLKZ8jT4Qd1pE94IMwvDM1e3YYYldHtCz34Po0Pkg_p9VMoa-7aaYHZZuzZK9JbLDEryL_arOnY3SHQANKrF-e2-cV1Cfz1OVuIL6LtbJDM8wyPdOot9bZbvnPhxQWXGZ6i7q4filRPYqM_8DKg42snyJ5ht9QK6-tMAywP5xv21XGy-T-LN14fM-PwHut9zmQE6d6knRNhxBf-u8xmf_z4Tbh-EMuPzB_Pr5frT5TM834F__QFhPIkP6AoAAA",
    "category": "Happy",
    "tonic": 2,
    "scale": "major"
  },
  "G12 (modified)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE5WWW47kOgxDNxQY1IN6rKXQ-9_GhZP0zFS1ncb9Di0ox5To1-ul_XVgSBcsPYKeqVQe-DpeL9PNx6HemdHlZd5RdarjYMwD1QythmbQquTA8G7SOjqi2zKm3mVXPSkiRLKUwpBTHWu1DADVikAERPlUWoYSEQ2nN9F2qi0Pch7waFVrpCqjxeYBAu4BgxkQ6ucB35VPQtUglCDsbFz7rP6z0qFPjHVc_y4IIVXqanVDQQchZoVGN6TyiYJ-AvYnwPZ_ANsn4PwGbPOAdSC9zdB0Yurfgak98bWRVCDFwotaf_jGsrgPQLJcVExxNb7D7RvctzMWtT-A-xMWn41Xt3SK03H5P3ZUOACNDKm71FNtDqU6TSJKaO5vll7p35HfxG-IK_079Mu1csyxxGgr9yxxp1hpHrGCvrnPGEozp2p60uNaI7kTnwZRFTWBX85y24kXwK2PwHrOc0V8N2y5JC4Ha3mbOQiHuKZ2gnECnItkXTtp2aLMAvl3hZy9sNvDMyxgrZSjBmCMUtdwPDq8PmD30y_WErZsTVXjvD8zKQ8GfzF4j8VW3Rm8h9LVUqvEyLZfDN4fvOUXg_cH8vs2vZetCxbId3mAoaRom1c2U26DH5RdbcIbYWZhuHN1G2ZYQrcbevZ7GB0iH9Sfo1LW2Ldqgtll7doo0UcuMyjJv9gvdewmSHQANKrF-e25cV1C_36crIovoO-mSGZ4hke6dRb73izfOfFjQGXGZ6i7q4fizgnbvLpk5mdAxdFOlt9gtuoFdPXbAMsD-cb9e7nYfJ_Em68PmfH5D3R_5jIDdO5ST4iw4wr-XeczPv99Jjw-CGXG5w_m18v1p8tneL4D__oPuil6rOgKAAA",
    "tonic": 2,
    "scale": "minor",
    "category": "Happy"
  },
  "G13 (C major)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE21VbQ6FMAi7EDHCvs9i3v2v8aKjgHM_R2oHXanXdUmjwj86jzQqnT-6rjTuI49O5yHlqXTK1TBHWVFNUajwc6x2BE0ONLzSMGgq5QyUzO-AETAJ5eRFZaLMXlOyrMCbLM1PgUkg49BWWttKyiRWyffRr8qgGYEmT5qI0oYG5Q7UIlsBU6VyehGDzGeaNSUTKjZdfV9YXXR_36pkpkEFEzRoo1J7K9BMJ69MSZoX0BAq_c3RfTQfv6_ddO9mCnCjxvuq4a_mcw2I5KiNQny-x2D4WwaVEqr6dlTcwm5yKjYA8_tW5l1zrFb3Gdi8bqOzLNsAq-ccFGP1upuf4fTMVE0zTgubeR3ta9X85pPC8Aa9LcF5WWlzvQ-vng8zmeld8mWXGJ4P4qjjxS-D319ZxXWZse7SimH5iPvk1XS8X9i2idU-VG2XWdwXYfoutbhvYov7Lrd4LLqGHQjtjU972ALXW54VCDl57tJLbAUCbpNfMv1vOor5PyaYIOpjhImvQNhQmVvgKGyBbehEfdqzvB9q5du0MrfA27MtsJcWrID_Yh7___7CUfkxGgcAAA",
    "category": "Happy",
    "tonic": 0,
    "scale": "major"
  },
  "G13 (modified)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE21V2w3EMAhbCJ0KJa9Zqtt_jVMbDDSXzyLiGMem13VJo8JfOj7nqHR86brOcX_y6HR8pDyVRlq951PWrmZdqPDzWfwTMJpgeIVhwBRSRZfMc-gRIAmpRNGQSDlqBqbWeIOd8yh6ToAdida50joNSbyi92dcpYAZCUYnTO4yQoO0oWuRrQCpkPptxQipPdOsGZhQOQFW3xfWED3etxqYa1CBBA3aqNTeCjTXKSpTEmfenBAq_Y3R02g-fl_Z9MRmoGu8rxrxajHXgEjRtVGIj_cYDH_LoOJH2QyuTKWmIkxOpTvgNHoc5R05NqvHDOxe99FZljTA6qpJMTavh_kZTr_pumZ8LmjuddC3Kh4lTQrDe-ttCdYl0u76GN48n2Zy04fkS5YYnk_imOPvulcsg3lXcV1mrLttxbB87vvbV9PxcWHbbqz2B9V2O4v7IkzfbS3um7XFfbe3eCy6pgwkeuOPHlIQessTgbQnj932Eo9A6tvsL5n-dx3F_Z83mGDV5xUmEYGUUJkpcLsIUuAJnV1_9HzfD7PybVqZKQh6ngJ_aUEE4hfz-P_7A01Ld4saBwAA",
    "tonic": 0,
    "scale": "minor",
    "category": "Happy"
  },
  "G14 (C major)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE5WWbWrsSgxENzSYkkoqSWsJ2f82HhonELhxhzf_Bov2aX0c-ePjg_NK-3zhqlF7yZptlm4vfL4-PpL7zBXTZYW0TLPRCxcZIM3JES2od3g-hUtywDiTDfPY6ODTu-0C4KSLzKDXO1y_H24X6QF4zZjg0W8Ue4qWFD_o3yiM133VX1BmWkDYdAVYfrqoXz-gwbSb5YHcl-Xn743STyi-KE2q6d5U3Ojzumn-iec1M5AmlO0aO1U0rh_VDPackhiXlK5CKwN70e969q8ksSQEHDMsnLOSSxIq_350SnguSQKM6UnwzREv4VeOvGZKKkqRKr8v2b8freUoIHo6ifATtC6JrUooLCreuQ49lUYLMoB82gwb9VyauqQwoDSlgd7Zex7c2jYxsoemZPvp7L5IEBhMeaFPue7rl8l5HuK-ZpQwxKgT46chnuVIhhXRFqhT-831XT9FVbmfR3gWpBg0gvNVx4c72poNpQoqmMU4Vd1WbD6MSJ-pIM8TbFiUUWWJw4o6T7CtfcqB5lQ0iqdaml_0oapTxFTZUYRrHwYwNQWh4zzDtvrJVM3IVdXnzHBZBNt_Csyxs4yXZKU2yj1rbp88S3nV9l4kOXK380VjUZrBJqzDdUziuu3_rKp1m8BI9ykF711lrzsz_8avgyJgqomRfW2rBweZLnoHo-E9Hno3wG23X6MlD9W4vLuq_ijpaijEmPBOROWxpLUsUuN-SZ9LutZCM9He6Jg_KrrWilY75Ii-Tf5Y0r7u_eruJR3taastg5ohk7f9sTVtvZUGC03mmJ8_J2ZJXB0tc7TfnfuUwjWXESZMWt0oh15ZczHUcqH6a-IeWsWxJAmrmKi0jFOrOC7lSF0SqP5jgfuK6725e4K7V47fNbYoxYR5-8TXCnr6ZrJFGTh8OGb112fQSpHDtPTqirlb5en0laIMbhrG2L3yH3rF14kwpo9XZN778HnV-jrRCSeGKAc_P_8DCrHinVULAAA",
    "category": "Happy",
    "tonic": 0,
    "scale": "major"
  },
  "G14 (modified)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE5WWYW7tSgiDN3QUGQwG1lJ1_9t44qSVKt1mqpd_UdDkA4OZj48Pzivt84WrRu0la7ZZur3w-fr4SO43V0yXFdIyzUYvXGSANCdHtKDe4fEULskB40w2zGOjw5_-bRcAJ11kBr3e4fr9cLtID8BrxgSPfqPYU7Sk-EH_RmG87lR_QZlpAWHTFWD5KVG_fkCDaTfLA7kvy8_njVJPKL4oTarp3lTc6PO6af6J5zUzkCaU7Ro7KRrXDzWDPacixiWlq9DKwCb6rWf_ShJLQsAxw8K5KrkkofLvT6eC55IkwJieBN8c8cr5lSOvmZKKUqTK7yT796O1HAVETycRfoLWJbFVCYVFxbvWoSdptCADyKfNkHmSpi4pDChNaaB39Z4Ht7ZNjOyhKdl-OrsvEgQGU17oU637-mVynoe4rxklDDHqxPhpiGc5kmFFtAXq1H5zfeunqCr38wjPghSDRnC-dHzI0dbZUKqgglmMk-q2xubDiPSZCvI8wYZFGVWWOKyo8wTbuk850JyKRvGkpflFH6o6RUyVHY1w3YcBTE1B6DjPsK39ZKpm5Krqc2W4LILtmwJz7CzjJVmpjXLPmttPnk15re29SHLkbudEY1GawSasw3Us4nrb_1lV620CI92nFLx3lb3uyvwbvx4UAVNNjOxrWz14kOmidzAa3uOhuwHmMVryUI3Lu6vqD0nXhkKMCe9EVB4lrWWRGvdP-izpuhaaifZGx_yh6LpWtNohR_Tt5I-S9nXvV3cv6eietrZlUDNk8rY_tqatb6XBQpM55ufrxCyJq6Nljva7c59KuM5lhAmTVjfKoVfWuRhquVD9NXEPreJYkoRVTFTapvfcKo5LOVKXBKr_WOC-xvXe3D3B3SvHe40tSjFh3j7xtYKe7ky2KAOHD8es_roGrSlymJZeXTF3qzydvqYog5uGMXav_Ide8fVEGNPHKzLvffi8an090QknhigHPz__A0_iCUlVCwAA",
    "tonic": 0,
    "scale": "minor",
    "category": "Happy"
  },
  "P01 (B♭ minor)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE42UUa6FIAxENzQhDC2CazHufxsvgPBAuaKf42mZUjLHcXCDiyesoYM9cRyMEFsFQ-eT6CzENfHSCJGmSSiih4QmFkkgvknbrOFVGyB702LwtvuYiQit3rKwI7uA1gOYHPd1Ls8kcBbpZBq_R-k-RSbUQjX3GH-LQFb_r_t4RQZP1uqyoFwJCe5wgsQKNEwnaN0KMWuonck3avTJLyXF6Tv1Bfnk0JtP0OTt1DeQr1JPhNs9KrbFUrb1ojezJsIKCcbOt_CTX_oKgy9voo6jh-mNddFAvZly96ygzsKC6eE96vrooM6yg_oMD2pKj0ev8bRnlFBvWVLK-ijJNc8s8XWi__xw4OqZMFSgNJoA3cJ-Mx-QMuyOtCnmh53ZXQbWgfG2PT3PP6dWNpP8BQAA",
    "category": "Scary",
    "tonic": 10,
    "scale": "minor"
  },
  "P01 (modified)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE42UWw6FIAxENzQh9IHFtRj3v40bQLmgKPpZT8v0kdm2jQy87vCOGH7HtlGE-DPgiEMKsodwDR4xhmiNiZVggFgNlpBClhpaRgWPXINUKS5a8M1HmVihdBA5QB5ZBvR8gZLkNpEzJ2CP9DS5sEZpPkUmlKClm_63CGT2_xjIK9Jp8l6nCWUmqaMVrEisQOOwg1qtEKOC2oh8o3qd9CWlKH2nviCfFAb3CRocz3kDeZS6wy5zVCyTpSzzRS9uTtgMMefHW3jkp7qs0xVc1L51G06s8QbSiyi-mgXpyC0oHd4tr_UO0pF5kN7dgzTZx61W_9rdS0gvZsI3LwkPZhLOlv4GwqDZnZCdQCk0AJqNPTMfkMMlPNKuOJ92hlfpYAbFy_50339yMsBD_wUAAA",
    "tonic": 10,
    "scale": "major",
    "category": "Scary"
  },
  "P02 (F minor)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE42WXW4zSwhEN9Qa8VcFrMXK_rdxhe0489142nkdNXQBxem53W61TJbbivhacngzu9qtM4m2JV_rdlPsThzRHd3lbpmJtgn5kFYPEXX3zGxDJ-5Br_NGShWb5iaZnkuPV3q4VHjchfEiO0TKnaomnh78mJ0kAGhBqKz8fw1xiAjJqmpaV2LZfHL3iIjSaL8HqS7zt6rs-KdL8O873p726RCZZhaSwX4M4uIsRJUpAAtmtc38u5RNK-OA2KmbsU2NQ8TO2bFRjVENEXwXeu6595V1OI05dd5-HLoLglh5WJa0sf-Z73VYTj3uoaqeEvj20Svit5XyOPkOWbrrbk4Lyr0jGGX6p_xkV3XT3VTlXSVxJMwg-T07rDpEnMyqtma47b1aB8SVmWbI0N5OvadLZAIoaD92-WLoPYNQplerdeo2scohEmdS7JZeRvN5Ee6Hl-q6ihgK-clN9whfKutCvQ5Zojw6okvJN6zLrvPUbOmAItwjswwdu_aoTRHlQVV4av0l_6DiN4cuah5WQFleHXT9odCO1oOMIMvMMqT1I63jcK8IalQqzXtvNx3MhLIEFC3mHTOOFXl5wQmNCu5hqgMm_rBpB1MdLuG0l6cNw4q4a9IjWAoKTDTde0x2nFhmobs7hkdxwh_28odDdEcENMrvrlAuzxVc0RP0bEMhqGVCTBQE5bCsMOoe3TqEgDtUNcX7Qfor_cOHVLaADnv44Tr1AOL04DzlX519vsBmLUnHHzbAhhMgC6AWvHfPjg0nXmR06l8uGFLk6S3YVGDDCP5Q7i8LZoOI8w8LPiyY2eHemd1Ghj0nsPn3GK5kOTrgCpVPC2Z2MB3IglETD89djtiGQemOzEJb3R-yqwEMglgOqlYK7WXMk6HfLJgNhYpsgNCqnUFtgFLK9ups3uVcix86JNlmLhn-FL9CVuSCvl8vG070-Zn8-voPX2EVp1ALAAA",
    "category": "Scary",
    "tonic": 5,
    "scale": "minor"
  },
  "P02 (modified)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE42WXW4zSwhEN9Qa8VcFrMXK_rdxhRM789142n4dNTQUxem53W61TJbbivhacngzu9qtM4m2JV_rdlPsThzRHd3lbpmJtgl5k1YPEXX3zGxDJ-5Bz_NGShWb5iaZnkuPZ3q4VHjcC8uL7BApd6qaeHrwbXaSAKAFobLy_z3EISIkq6ppXYll88ndIyJKo_0epLbsdc92_KMS_HHHy9M-CpFpZiEZ7O9BXJyFqDIFYMGstpn_trKRMg6IndSMbWocInbOjk3VmKohgkejZ829r6zDEeakvP06dBcEsfKwLGlj_zPf67CcftxDVT0l8PDRM-KvlfI4-Q5ZulM3R4Jy7whGmX6Un-yqbrqbqrzqJI6EGSQfs8OqQ8TJrGprhtveq3VAXJlphgzt7dR7VCITQEH7e5cvht4zCGV6tVqnbhOrHCJxJsVu6WVqPi_C_fBSW1cRQyE_ueke4UtlXVSvQ5Yoj47oUvIF67LrPDVbOqAI98gsQ8dOHrVpojyoCk-tT_IPKv5y6KLnYQWU5dVB118K7Wg9yAiyzCxDWt_SOg73iqBGpdK893bTwUwoS0DRYt4x41xRlxec0KjgHqY6YOIvm3Yw1eESTnt52jCuiHtNegRLQYGJpnvr0gHTk2UWurtjeBQn_GFf_nCI7oiARvndFZrLcwVX9AT9yFAIapkQEwVBOSwrjLpHtw4h4A5VTfH-Jv1V_cOHVLaADvv2w3XqAcTpwfkp_-rszwts1pJ0fLABNpwAWQC14L17dmw48SSjUz-5YEiRp7dg04ENI_hLuU8WzAYR5x8WvFkws8O9M7uNDPuZwObfY7iS5eiAK1TeLZjZwXQgC0ZNfHvucsQ2DEp3ZBba6v6QXQ1gEMRyULVSOCU_FHoa-sWC2VCoyAYIrdoZ1AYopWyvzua9nOvihw5JtplLhv8Uv0JX1IK-Xi8bTvT5mfz6-g_xMM2hUAsAAA",
    "tonic": 5,
    "scale": "major",
    "category": "Scary"
  },
  "P03 (E♭ minor)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE52WbXLFIAhFN8RkBJToWpzsfxsd-6ZtQiGE8DNy5XiJH3NOZKAGdUAjaAKCB5SNqfM5oBwwJxVgWsMkdZxDlkRFKBAVoeDyYYweCDCLhBqphQKFFK2BNFKYbxF9d8wTJIk4ScS2RwjMwDvUAtVBY432W-lHWG1hTSJWjRjme2B2fkvytCRPs3huei6Kh54aKybYg1bK21buSev2zduQYaHcWdHfetgtD2-a9WmmAHVn3AK5m0_Vr0_BR9IhLG8twn9HfVzKY4tKYdI-xLf-IZqQn90jd7sHyXRyKV2BBalK4db3i7IvocfoVOIsGrtoriCJpI__ON8_1U5m4bi8cJYuCabvgSPMT1qlL4K_lTgC8yY4_4xV1LMOZVOzxDX0Ko4v9jAJGUUKAAA",
    "category": "Scary",
    "tonic": 3,
    "scale": "minor"
  },
  "P03 (modified)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE52WbXLFIAhFN8RkgiDqWpzsfxsd-6ZtQiGE8DNy5XiJH3NOJCgVeEAlqAKCB-wblU7ngP2AOcsOVNZwER7nkCVREQpERSi4fBijBwLMIqFGqqFAIUVrKBopzLeIvjvmCZJElCQi26MCxEANGIHFUyq030o_QraFnERkjRjme2B2fk3y1CRPtXhuei6Kpzw1VkywB62Ut61sSeva5m3IsFDurOhvPeyWhzfN-jSzQRnOuAVyN5-qz0_BR9Ih3N9ahP-O-riUxxaVwqR9iG_9QzQhP7tH7nYPFtPJpXQFFqQqhVtvF2VfQo_RqURZNHLRXEESSR__cb5_qp3MwnF54SxdEkzfA0eYn7RKXwR_K3EE5k1w_hlZ1LMOZVOzxDX0Ko4vcuJkqEUKAAA",
    "tonic": 3,
    "scale": "major",
    "category": "Scary"
  },
  "P04 (C minor)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE32QUQ4DIQhELzQhDoi6ZzHe_xrN6qYptnY-4U0gr_eudSAJLYUY0kDvbIelsITUSfuJtpg86XSiPY54095QbEAl7lJGll_4heIDLrzax2FH2Wi96ZMD7ufW4wcp1GjlrxPqJmXRByfUTcp8JBNvLfUKpw3cvayK4lGjYrEC1q_GeAFxpmkHIQIAAA",
    "category": "Scary",
    "tonic": 0,
    "scale": "minor"
  },
  "P04 (modified)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE32QbQ4DIQhELzQhfIiuZzHe_xrN6qYptnR-wptA3hhD2wSTGIcYeGIM6cmSpIa0RXtGW0xZNGe0x5HctF-oNqEUd1xQ6AdeGdUnnKRfH4cd9aD1pjMHcp7bjydSRKOVv05EDymbTpyIHlLWI0Xw1tJ6OG2Q08uuGB41ShYrkPbVmC83zb0FIQIAAA",
    "tonic": 0,
    "scale": "major",
    "category": "Scary"
  },
  "P05 (D minor)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE5VWWbKDMAy7kCcTL1k4C8P9r_EmgfYlxg6UT2rFjmSp7PuO5YAYKMXpyRAP2HfcnB-DeoWtmqJdjWF-E6lXk1etXkmvFrua9NlndfKqrbOxgHc8B-OeuIHXgFWDixcgh2WxzicCcogX83wBRrs-mecnYIf8ZJ3f-XFHysEQt1PkTpVdltzBitWlEwXsaFdUF_pyBZxtSDW7NLqAHQWr1eXDmNtoW5Hm9trMG128ATsCYVxxB-KIhHHFHwg7MFxxCOKIhdr2_85scwqCCEhtYN6mSgTUISATmyPWaKwzoYNHDPKM4YbJ41NeQSqPT560W9-PHwQcsfNgDbtUcYnV6SSzlMuZdVKdG87QrpxAYsd6G6tj69RkwBgEp4B3TZ4gfNcEExA2WUbw_X46KVPHZiAGqh2bOpYUrwUwm-ta-7p6f6E6MuU5MlFn5onBNh977i0_2FCvS31twzuddXW_JwvrNH1j4c1alyeIsS6ODfX9dHTLextS_MGGd-zctzg2xIDbFFDNBaaelz2cDyw0-122cDC08sNDVJAd30vfkxnfT5BlfH_tbmmg47v3-_hQYdXekI5vOY4_ao-Hw7ULAAA",
    "category": "Scary",
    "tonic": 2,
    "scale": "minor"
  },
  "P05 (modified)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE5VWba6DMAy7UFQ1Hy3lLIj7X-OJjk00xIXHzy5uUju2tm0bLzvlJCUPX6W807bxCn5M7oiPauG4mtN4kqVXC6p2R9arLa4Wf_enuqLq6G5eCF2vKXgnr4QaqGtw8kLS4nqL7hchAcRbeL-RAupLeH8lVVQf3N_5gSPVFIjbKYJTVcgSHGyJunSiSIF2i-siP65IgXwt7HLQRQoUbFGXL2Ow0TojDfZawxedvJFlYKg8444MuTbP-CMDQjHPOCQrEFaAM485jckKWedF16GSiX0I2MDmFRs09pnQwVcM64jRA1Ov3_IK0vT61VG76fv0QcArdhzswE5VnGJ9Otko5XRmn1SfDTc6nlzJ8oEtaGN9bH00uWACgkviuyZPEL1rwrXP2IYZ7-_zSVm-WB2x4nhdiGu4rq2vK2LER6Y9Ryb7zHyHeW9Dvy7ttQ3vdPoYHWZ9srBP0zcWXqN1eYIE6wJs6N_no9ve21DyP2x4x459F2BDTrwOAVVIONTztAf4g8Vhv9MWACMzPzxEhcTxPfW9hPH9BJnG9xAVXgMf370fwLq9ER_ftu9_TYukr7ULAAA",
    "tonic": 2,
    "scale": "major",
    "category": "Scary"
  },
  "P06 (A minor)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE32Tba6FIAxEN9QYho8iayHufxsvyn0Rh1H-QaYztfb03nM6LGxoe7ZwWO-l3Pct5ubn4yzaSgj7oqwlZFKCRFB2UHa47MJ9IlVFKojKOirrqDpNJErKLl12U1N5qfq3RrSYbdS2VN1YmlVAVv3mqV_zaH7rC0mLMi3KtKghOIlc2bmyc_pdoKJK-no6l3Yf1quQqkJitgRLPs-aC3f1HfsUQWPdHxNP5rdVI-umrJvqvklAGDhI4iCRg2ZugU5Tp7HD-waDkYNkDhI6zNTRuPGDj0aNweCyVObFvM6yJ5VLm-mMTu_LBmYTA873dcYA9SPzgvYrk9HFYPcjc3D8kXkx_cg8_gAZI2CI3gUAAA",
    "category": "Scary",
    "tonic": 9,
    "scale": "minor"
  },
  "P06 (modified)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE32TUZKAIAxDL9RxCJQiZ3G8_zV2lN0VY5Q_JU1q7du2zctuaUFf3dJu21br9bxk73G8nEVLTWl9KFtNTkqQCMoOyg6nXbpOpqpMBVlZZ2WdVaeFREXZldNuasofVX_WyJbdRm0vLYylrgJc9etTvxbZwv-vKkmrMq3KtKohBIlC2YWyC_pdoKJG-nY4134d1quQpkKyW4GVmGfNhav6jnWKoLGut4m7xWXVybor66667xIQBg6SOEjkoJl7QKep09jhfYPByEEyBwkdZupo3PiFj0aNweBjqSyqRZtldyofbZYjurwvG5hNDDjf1xkD1I_ME9qvTEYXg92PzMHxR-bJ9C1z_wG44Osc3gUAAA",
    "tonic": 9,
    "scale": "major",
    "category": "Scary"
  },
  "P07 (F minor)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE5WT2W3EMAwFG3oQxEtHLYL7byMQHWQtWl44_NZ4yEd6jEEGrjCCKYocyIl6k2shHxiDKrjDMkxQeP8usfal1MkGydBT0h_IAHYHvTUtDrYDEr9fkFPVO8gZwlB1aZlGLpGUtDN2CE2jdjfuQE1L7yIOFnC7zMjxETSVtT4Tfg2fcmi0vdwGUYirvTVS2MY_jOs22sv1E21nDOvPSUsEeTfjff13I--MzBCFikttD8YjPEGBGDRPqT2EI7tU2SAV0h2keeJFlyuxCW5SPY1SXfqQ6mWmaWA3bB-Gmfw2f1P8m4kS96U1nWD4O47jB3OJlC5TBAAA",
    "category": "Scary",
    "tonic": 5,
    "scale": "minor"
  },
  "P07 (modified)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE5WT263DMAxDFyIM62HFniXI_mtcWCmaWlGLXH2bOSKp7PtODbyhEVqDyYFaaHT5HNQD-04beKBVNIFx_q6wjmXUlQNC0D4hVr8og3C40FdT8-36AYnfN9Sy6V3IFcJQdahNIltUSsmI56oGHU7MhFqW3UWudC6PHB9Bi61zOfwZPtWwaH_YBlGIqz8lUmjjH8S1jf6wfqLUY6i_FrUo5Mzjvf47kTMiM0Sh4tCWC-MRnkKFGJQmtH1JVbJUuUE2yHAhzRM3Xa6kTWGS6kmUzaEjJ354mgRxQvowePLbfKX49kSFx7KaTmH4O47jDy-x4o1TBAAA",
    "tonic": 5,
    "scale": "major",
    "category": "Scary"
  },
  "P08 (C minor)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE4VUba6EMAi8EDHlq8BZTO9_jZd29ylbq_qHSBkKzJR931lBDBShcoOyEbNG-gxKg33XcYgk_jXdSQYcoNJAtxCjcn7aU0nUga0JyyYynA5Wkl9LGTk1krNSx_bg5DQtcol003w9JlStApgA478bzn3OgI2ZckEf51FljqzV6BLpzKn061QTYnF4zu4OPg1sFXEM6n_UFtWBB3MBgk-k20S6DZMJHmkKMN0JwHoTOe2kBbvRgq20YCst2GhxZj2D3BRTBTpxNxPsw8xBKyn4Sgq-koK_SiGeaIxXKUSaFxi2Lm43gjgEQAysT2yjTHSjdGsTeahANuj-vMIe1qubGTg5RrkhGWVUfSLz2L4BC8ZR-sX54V5hv6tgVIQGFPDNEy6AOj9YPainCuwN5Kpo1GW7nrOs1oYue_2BrXaIvioHP6c30sH6qh2sr3sE680iQWvtD0UKVXNABgAA",
    "category": "Scary",
    "tonic": 0,
    "scale": "minor"
  },
  "P08 (modified)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE4VUWw6EMAi8EDGlPHsW4_2vsSnrKta6-kOkDAVmyrqupMAOgqC0QVkqkbT0GZQN1lXiECv7brqzGlADkQ1kaWy1nJ_0VNw0sJqwZMzhdLCS_FJK5NTs1NqxPTg5TQrfIt0kX48JpcqACRD_3VDucwQsRDUX9HX-qrxEqlq9RTpRKv0-1YSYHJ6ze4IPA5tF_AZ1jNqaOlAw14DxH-k2kG5hMsGRpgDVJwFYbyKnHbRgD1qwmRZspgWLFgfWLyA3wVSBDNyNBHuYMWgmBZ9JwWdS8FcptH80tlcptDQv6Nfjgm4V2iGAykD6j23kgW7kbm0gDwWqBd3fV9jDenXjuzs5Rn4gGTmqPpF5bHvAhHHkfnF-uHfYdRVERWhQG-x5mjOgjA9WDuqrAvkGfFc0yrRdz1lma0NmvV5hsx0ir8rBOH2SDuqrdlBf9wjqwyJB27YPkWVezEAGAAA",
    "tonic": 0,
    "scale": "major",
    "category": "Scary"
  },
  "P10 (F minor)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE33Pyw3EQAgD0IbQCgwYqCWa_ttYTXLM52qeLHMch7kgl9hPVVGpCoyxs0WXfJ3v0elTUC9-ZtpIpnl38eQU9CP3HekYWeGatKv-1ceOnCSnAER9r4-9ZrTdkZzwi7-2c0fW7h5NM3h-P8tdX4iZKm23ODkE8ch7rT9Nna0hiwEAAA",
    "category": "Scary",
    "tonic": 5,
    "scale": "minor"
  },
  "P10 (modified)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE33Pyw3EQAgD0IbQCgwYqCWa_ttYTXLM52qeLHMch7kgl9hPVVGpCoyxs0WXfJ3v0elTUC9-ZtpIpnl38eQlmEfuO9IxssI1aVf9q48dOUlOAYj6Xh97zWi7IznhF39t546s3T2aZvD8fpa7vhAzVdpucXII4pH3Wn8uhQoiiwEAAA",
    "tonic": 5,
    "scale": "major",
    "category": "Scary"
  },
  "P11 (B minor)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE42TUW4DMQhEL4RWwMAAZ7H2_teonKRqN4mU-MvCb4DB9lrLXDxO0SPYdIclopGip6xlIc53h0eqWpalIjRmQ2uVWIjN5gflEYRyWGKHqsICqmydTnskv8MA2J5JmLtmpNgxMz3pgCmBng8C37Gsqp6wzghsAUzQsvcvDnw70HQ0ItgwfKxAMp1TFZW2sbVMxUrcBSEoCZ5iR1e6O30YozAItn3XSaC6sMf9J71VG6p1Z2to5_iWpCpIdphXG_GscWbUQDvRqTYSx8WQzhcKAFFQ9_To_qYGWZaZ1Y3Sx7VQHOItMAk9XxuR3BHTKLIHfJjZsvezzh27jQqu2eyPPMkC08zpEX7hn26eu5mwUVZWMK7JX-BUzaJbjaXF_eH-wtdXXjvxv3Xt4sr204-o8_wBrOz51owDAAA",
    "category": "Scary",
    "tonic": 11,
    "scale": "minor"
  },
  "P11 (modified)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE42TYaoDMQiELySLOjrqWcLe_xqPtH3QbQttfgXzjTomWWsZxPMUPYJNd1giGil6yloW4vx0eKSqZVkqQmM2tFaJhdhsflAeQSiHJXaoKiygytbptEfyOwyA7ZmEuWtGih0z05MOmBLo-SLwHcuq6gnrjMAWwAQte__mwLcDTUcjgg3D1wok0zlVUWkbW8tMrMUhSEFJ1Cl2dKW704cxCoNg23edBKoLHs_SW7WhWne2hnbOzrfbA8kO82ojXjXOjBpoJzrVRuK4GNL5QQEgCuqeHt2_1CDLMrO6Ufq4Fu4JeAtMQs_3RiR3xDSK7AEfZrbs86xzx26jgms2-ytPssA0c3qEX_iXm-duJmyUlRWMa_I3OFWz6FZjaXF_uP_w9ZXXTvy0rl1c2X75EXWef-1f1zmMAwAA",
    "tonic": 11,
    "scale": "major",
    "category": "Scary"
  },
  "P12 (A minor)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE42TW4pjQQxDN2SCLfm5lpD9b2Nw3R5oZm5IfgsfJEuu5_NpJVCBC-Yl-qhJkN02GoCH6Eu-GHrMzNRUlI9XV3xD2aFiwnx64oIIYYr7Ejblk6qwJTQoOAgHBW9nYpGjIMx7hOeNgfLoiUYdZoQQt2Wg8IlR7UGOewgfnLQ2hHEs65LRI4N3MjGdVRbAOkv_1xqUa6FibSRmZWrKQcNop8eVmssGZ4K8TY0nAhvFJm73THmzI1OhQ_FFerq6vDjsL5g4THW4T3bhWieFlOXvIsiDRFPhybArtRUQ8h6pfWM41SO7duzqhm-7qdONKtpY2rDPxmq7iW0UWGN5Dm3nxeO-mtrgdWDbZRevo6FQhXHbS53t2Roz0fw432feqq08qP1ZYR43n4xx1qj7ze38zKoi4Y6_V5lysDeM7SOKpIdX9-lxbbX4uf7_SzHbVtSGZvSZnx_za5tbna3FAgast7PPb2-3OjWFNOtR94pTZYuFQF-CdQE1H_Zktx-VTSBKe4bl3q_XH7K5AU73BAAA",
    "category": "Scary",
    "tonic": 9,
    "scale": "minor"
  },
  "P12 (modified)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE42TbW5rQQhDN4QiwHx5LVH2v42KSfpUvd4q-TviyMZm7ve7tbiJhzgfordmOTBj1HSPFH3IB0M3kmx2djB6Oj-h7FDJtOAwnxAgKIlcwtjBUnVbQhPiBwG9PSZQvshRENQ1gvOG9I4c5ngfhgJI2DKuHkyqDr0YkYIbWDbmaaBVP2XsyOAvmeRUt6X7Oqv435or1kLn2ijnyjQ7HObUqchnaiGv4OoyNZwIjOqbuF0zHYPJKnUlJBYZTk9Hg5gPmDxMT0awpv25Tm1qy19FUAfJgXoU0v6lttQ10vuGDGhkTe_Yu276dKPqY2gdt_fGervJbdR9jdX3oc3r0H5X0xu80m27nMbzaCBQQV720md7jCaZg7fzc-atxzoSOu8VeLv4ZMizRl9vbudndjfgEf59lSUH-4OxffQGEBk9c3pcWyPh16WYbStqhBmCfP2YH9tc6mwtlm7u6-3s89PbpU6zvcyGGtF5qqRYyR6CrwtXC2JYM3FUNoFsHRIdMY_HF6UHjFv3BAAA",
    "tonic": 9,
    "scale": "major",
    "category": "Scary"
  },
  "P13 (C minor)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE32SS46lQAwEL1Qqpe307yyI-19jZLoXqAdYv1C-qMDHcVgvxgo5F7d308Vg4g7EwrmOw-tc2NaBhhs7m2q1sB1wIWHaKiUX2y9sd5eWm6p5W_OC4xGWGTZqm7uWKPhhoRtAeZpVKQziF8wX2AFJYWQGEbCB5-kPsM1ylFcKPJTIDw3bDlFAk8aiSnzU4Cz_V-45BmcYWoXwoo3rq4RvQJym6Mpw6kcKnxT3bsOqnkt3MAJsK00JkMt3-r3atSt-3YzOdDMrLbtTnStGw1KSKqKs30_y7BzzvqoQOsEI_eiWM3yP_NEtZ_ev84tDbUBVG4U2zfrqVrN7a3xdkPmiLuYa_YciPX8AzxCTqJzMr4_s7VBPhQTnp68TFUyRW72fIvkGO5SAs6Kjfs_j2UJklFvYLl0NvTTc32D_E_D8B6_BeIBZBAAA",
    "category": "Scary",
    "tonic": 0,
    "scale": "minor"
  },
  "P13 (modified)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE32Ty43lMAwEExKEJtn8xWK8_NNY0DMH7-DJZzfKpbJ8XZf1YqzQz-L2broYTNyBWPis6_L6LGzrQMONnU21WtgOuJAwbZWS2QYO2-4uLTdV87bmDY6vYxmwUdvctUTBFwvdAMrTrEphEL_Hfhg7ICmMzCACdjvr17ENOcorBR5K5IuGbYcooEljUSVeanDIf8sdYnDA0CqEFy3kRcI3IE5TdGU49SWFT4pnt9mqfpbuYATYVpoSIJfv9Ge1myt-3xkddDMrLbtTnStGw1KSKqKs30_y3TnmfFUhdIIxyGO3HPAz8ku3HO5f54NDbUBVG4U2zXrrVsN9NL5vkMWiLdapSM8L4BliEpWT-XjI3g71VEhwHr1dUcEUedT7KZKnsUMJOCs66ud6HCxERrmF7dLV0Fvj0ETmj_0_4OcffbO4plkEAAA",
    "tonic": 0,
    "scale": "major",
    "category": "Scary"
  },
  "P14 (F minor)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE52T262EMAxEG7Ii2-NnLYj-27gCJHRBZFntb-xJjmfiZVmUCboSD-lMzkSgOsoKxCstiyrBJvWh1lqIyFDJDN8FIPhMYF0eCbga3LH3OyFn_emcEoAiS3W7d1k0Cf0skL1eZDyp34lzE4DJJhbInXh_AUo28URGWpYLs1Y4tOM0kSzIhbw2pUZYephFtxgb6ekdWZIreT_3jdMNa08-dPMQa3SnwCLZKoXzJdQeamFSQAlXFV4y7XFgMHuCI14i7ZF2sfQl0R7dptEw7jQVvCXMT_yfEuaHAT4FzLcJ8hKw9Sxg4cdRzsSf4xYZuB6eBm9vhcxUEVItIsd3lC9_ochPkPoTpN4gr4w6ZdSfGPETI0Z4s3pWdnhIXSEnu6yjqxwVJW1l-hWhboT_N_tY7RdC3QhDgs3LXFP3jSoSJ2XyoABFrYSt80qV6_oH6rd6pQEGAAA",
    "category": "Scary",
    "tonic": 5,
    "scale": "minor"
  },
  "P14 (modified)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE52TW46FQAhEN0Q6QPFci3H_25ioGTMa-zq5vw0VDlXNsizKBF2Jh3QmZyJQHWUF4pWWRZVgk_pQay1EZKhkhu8CI8RMYF0eCbga3LH3OyFn_emcEoAiSxXHgCT0s0D2epPJpH4nzk0AIcNMcCPeJ0DJJp7ISMtyYdYKh3acJpIFuZDXptQISw-z6BZjIz29IytyUPBz3zjdsPbkQzcPsUZ3CiySrVI4X0LtoRYmBZRwVeEl0x4HBrMnOOIl0h5pF0tfEu3RbRoN405TwVvC_MT_KWF-WOBTwHzbIC8BW88CFn5c5TfxSdwiA9fH0-BtVshMFSHVInJ8R_nnLxT5ClK_gtQb5JURU0b9ihFfMWKEN6tnZYeH1BVycss6uspRUdJWpv8i1I3w72Ufp_1CqBthSLB5mWvqflFF4qRMHhSgqJWwdV6pcl1_AB8hMWcBBgAA",
    "tonic": 5,
    "scale": "major",
    "category": "Scary"
  },
  "T01 (E♭ minor)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE4WQUQ4EIQhDL9RMVBDkLMT7X2MzumucyGT7S_tS6u45d6TLSGlTQepw54Ka4vNVb0Oh8JofYbJquwR5pqmCE9hCRhmOBtaYUSYjNyzTwaDBULDEDPr2SFimg8F_evDq8f7LdIyh1WSXQsZWr1HZhz7C-ih3hPW3cxhuvX8AXoIf0QACAAA",
    "category": "Sad",
    "tonic": 3,
    "scale": "minor"
  },
  "T01 (modified)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE4WQ6w3EIAyDF7Iq8iBpZkHsv8apcIeoAJ3_xv7kuJRCVJGuEJdJjFRRijLy4Xzlx8CyvdIrLJFjloF6WjKUoLFlcHME1PcM7gy6MUwLQxrDobZnyLdHwjAtDP3TQ0eP8y_d0cbwsFkOa1sdozYPvYT9VW4J-2_nbfiu9QOQyuZ2AAIAAA",
    "tonic": 3,
    "scale": "major",
    "category": "Sad"
  },
  "T02 (E♭ minor)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE32Q2w1DIQxDF7IQIQ6PWRD7r1FRUpWqcPNr58RO710qjAMxNC26TUIc6D3Z1LRZ2ycjBpuyRtDAdgTI26FngDignOX0pVu8WBYhRbC46S-CLswZoB7hWoBPCenbFSR4MS1LAi9vNO9g4MdUWt6nID91yJ4igQJyQIK0irKKnXfK_nrm-nMP1QPNt8gZUION8QIxG3tlPAIAAA",
    "category": "Sad",
    "tonic": 3,
    "scale": "minor"
  },
  "T02 (modified)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE32QUQ6DIQiDL9QY0YJyFuP9r7E4XeYy_Xlt-WhprUmFsiMGzyVvkxA7Wks6tOzq-xhi0CHnCBroR4C8HTwDZAHKWU5fusrFMgkpgmWZ_iLkiTkD8oqgtwJ8Ssi17SDBi2laEmgXfXVQ8GMqbvsU2FMHWykSKCA7JIhXlFnsvFP219Pqzz3UFWi85fL5GrT3F1rRJ3o8AgAA",
    "tonic": 3,
    "scale": "major",
    "category": "Sad"
  },
  "T03 (A♭ minor)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE32R0Q0DIAhEF7oYFVCYxbj_Go1oE5uq_D7uOKC1lgnCHTFUK3tVxI7WKA5GJrZXQQziWM84TS24QmS0cNEfe6RpkNV7PIFRpa0ysrvIeUReCSK4QPLRgEZHumSklYA8QeygkEzBr7V5Db1kWokuMExcz7i8tOU9t85FLnBqk4Lt-Gh19cVav2c-Y3PIYH_A35ctSO8fK9Hac2YCAAA",
    "category": "Sad",
    "tonic": 8,
    "scale": "minor"
  },
  "T03 (modified)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE32R2w3FIAxDF7IQkAfJLIj917hqoFKvCs3viR2De--VIDyQU3N9TkMe6J3yxcjFn6PISQL7HpepBTeIXius9mePMg2qxU4kcGr0mIoaLrI_UVeCDFZI3RrQtVFsb0ArAUWCMkCpuIG_ns3r6CHTSnSAaeK2x_ql1e-7bT7kAKe2GDjaehVtoT5Y2_3Ne-wBGRwFvFr2JGP8APoaZjRmAgAA",
    "tonic": 8,
    "scale": "major",
    "category": "Sad"
  },
  "T04 (C minor)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE5WRyw3EIAxEGxohgz_gWhD9t7GCKAlovYc9vJOfR4bpvWdFqdA8QKm66YaBBnpnAgvYIRZK-ZBUQqlMqZRfY15jvzN4IKfsjTYgm9PCFE1E5C_rsutqdqMdgyYlkocVfn2EJHWXDYVFyfPNCvbwlvr3Rjs2pr66CV3_cu8C4oro9McHItSC9_kBAAA",
    "category": "Sad",
    "tonic": 0,
    "scale": "minor"
  },
  "T04 (modified)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE5WRyw0DIQxEGxohG39Y14Lov40IVpuA4hxyeCc_jwzTe2dDbTAeoNLCbcNBA70LQxQSUE8lPiSzVKpTqvXXWNY4ngwZ4MJx0QZ0c640xQoRxYd12X21hNOOw4oR6ZsVfn-EFovQDYNnyfPNDon0lvb3xnVsTH11k7rx5T4F5BXR6Y8XF47c7PkBAAA",
    "tonic": 0,
    "scale": "major",
    "category": "Sad"
  },
  "T05 (D minor)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE1WP2Q0FIQwDG4pWOGQ5akH038ZTvC8cn7YcZhhjoE5JT-0qacoYWSPCo_aI6tEQMXNcxFo0xr2JrZPXG1R5MSWzKTei3oh2I3og1gApGG1V1ETl6oOAqtnWhK4bA5puDujpoCxWVktXZ-HEUdlxiUQ8rRYBzQ8i1bXH7bdS2m-uUn1z_yva63pLae_E89tqc_4AABMgzL0BAAA",
    "category": "Sad",
    "tonic": 2,
    "scale": "minor"
  },
  "T05 (modified)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE1WP2w0EIQwDG4pWOIRXLYj-2zjFtwH205bJDHNOtCXpaUMlLZkz54jwqCOiejREzBxXsR6NcW9SUjTFGzQpuiSzqV9E-yL6FzFexDkIKqpdVFDTISkgoGq2PaHrwYCmhwN6-l-yWN0tXZ2FG0dlNLFEIp7eqoDmF5HqOuLtf6W0P1yl-uG-K9rrvqW0d2K5PNTW-gEh4jeRvQEAAA",
    "tonic": 2,
    "scale": "major",
    "category": "Sad"
  },
  "T06 (D minor)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE4WSUY7EMAhDLxRVAQyGs1S9_zVWZDTadtV28xv7OTjs-641kMPjGHNjBUiF-aRp-pjH2Hdbd1ZemZExjQ5JjLn5nJbOaRoeKtpqyAAG8hiySTHDSdcwj3ZUVVJgqgDL5I0vzVenmLtMCBZf60ldVYRmAFmeYUvNgRju9x7tBNH0IN11EsvjL41ox4RAK2gwlq8R9D7AOuB88F9F1nykU7NYQn3lY8O10KVuz53at3kp9CPG9zH3Flxa5bJol4o6buYb0SHnTt8-LRr_22auWXGvZYNPZ-3OE5gNPtW4luGZ_GctP53zXp2NNqeEqFrFGhDyJL5uJY_jB2f9l5Z0AwAA",
    "category": "Sad",
    "tonic": 2,
    "scale": "minor"
  },
  "T06 (modified)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE4WSUW7FMAgEL2RFBhYWzhLl_teo8NNTkypJ_etlMGP2fdcayOE8xtxYAVJhPmmaPuYx9t2i76y8MiNjGh2SGHPzOS2d0zQ8VLTTkAEfyGPIJsUMJ13DPLqiqpICUwVYJm98ab46xdxlQrD4Wk_pqiI0A8jyDFvpHIjhfl-j3UE0PUh3ncSqiRcj2m1CoBU0GMvXCHbfwLrB-eA_RdZ8pFOzWEJ95WPDVehK64NQ3-ZF6CeM72PuS3CxylWiS-o8buYb0U3OTt8-LRr_azPXrLjPssGns3bnCcwGnzSuZXgm_1nLj_MHJdloc0qIqlWsASFP4etW8jh-AJAwurR0AwAA",
    "tonic": 2,
    "scale": "major",
    "category": "Sad"
  },
  "T08 (D minor)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE32T2ZEEMQhDE3J1cQgBsUxN_mls0b3nrKf9a8l-IHg8HprPJYcxjCwogWxgyXM9Htb7u8PdNcojTCK6fcRub8QkXZkqUNUunmJuxXqIiCY6Sy3TcT28gIV64_C_J8YCXfCFd5-QRCurwqvdvi03v3Q3QwSeQLjpVcRYwrcWO9ytpLyrQ9T1rNt6oVbswWzAfp0ch-aPI38zaPuy4SoLMa00Y-RNbD5EXe6Zklk8y54Wb7UkFZpuVo5Pbf7U-w_FB8VFpBLVQtwNBQYFUYCxQZ45Q99oXwbo1GKBK2KLgkFBhjCozMvh-zmPIaE7TMrM-66BcZCRrZkUy_7U4qYpcfRX_OYefbVxXydfBsZu4uGQNJkBjcir1ZyZD9uCcFqiFirtVPebt3M4ztAR5LXbE-ZWSgagpZ1pYfW9SW-zydcxOR2yfb5epuSuIzUoZ9rZIsYTe3bna6f_kdRkkxkarhJFez4_AKQNc8MPBQAA",
    "category": "Sad",
    "tonic": 2,
    "scale": "minor"
  },
  "T08 (modified)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE32T2ZGEQAxDE-qifMiyHQs1-aexZdhzFuhfpOZZcu_7rvlashnDyIISyAaWvNa-W19_29xdozzCJKLbR-x-IybpylSBqnbxEPNSrJuIaKKz1DId58ULsVA3Dv97YizQBV-4-wlJtLIqvNrt2_Lwl-5miMATCDc9hxhLXM9tm7uVlHd1iLoec1sv1IrrzG3Afp0ch-aPI38zaPuy4SoLMa0048hua_Mh6nLPlMziMfZEfKklqdB0s3J8autn3n8oPiguIpWoFuJpKTAoiAKMDfLoGXqjfVugQxsLXBGXKBgUZAiDyjwdft1sDAndYVJm3k8BxkZGtmZSLPtTi4dQYuuv-s09-ozxek6-LYw91MMhaTIDGpFn1JydD7sE4USiFirt1Gnl9u4cjqN0BHm-7SnzUkoGoKWdaWH1_ZJuu8n3NTkccnl9vW3JUyI1KEfb2SLGA3vezteb_kdS001maLhKFO31-gCSptR1DwUAAA",
    "tonic": 2,
    "scale": "major",
    "category": "Sad"
  },
  "T09 (D minor)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE31SWa6EMAy7UIWyOctZEPe_xlM6aB4gOv1tbMeO933nGNBj0KaFyvR00oBx2qBj7LvUgC_-NxBpIkjF4cLSAJUfgKrKYFMRsyjlCfABvAO4FQTBCjAZ21QwPlcujQgVcotKxuDmD5N0syyka49D3smlyVkSHgEIhfV054GjlasEphTEFVUY0uzOJuWhplH45PPOrs1-fZNdF7toc1siJCuKQya3LnK0ze454mcs2OiW4pyed19eyhtyzeZbheG0gtg1nvx2YYmIFrm8_zYM5Apit5zmgafx08rTezwrN81DlpXLVlAEO4to-XQ-S3Eu9ez8yEfr4jj-ANt9OFRYAwAA",
    "category": "Sad",
    "tonic": 2,
    "scale": "minor"
  },
  "T09 (modified)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE31SWa6EMAy7UIWyOctZEPe_xlM6aB4gOvltbNeO933nGNBj0KaFyvR00oBx2qBj7LvUQCzeNxBpIkjF4cLSANUfgKrKYFMRsyjlCfABvAO4FQTBCjAZ21QwPr9cGhEq5BaVjMHNHybpZllI116HvJNLk7MkPAIQCuvtzgNHK1cJTCmIK6owpNmdTcpDTaPwyeedXZv9OpNdF1Frc1siJCuKQya3-vu2bXbPET9jwUa3FOf2vPvyUt6QazbfKgynFcSu8eS3C0tEtMhl_tswkCuI3XKaB57GTytP7_Gs3DQPWVYuW0ER7Cyi5dP5LMX5qWfnRz5aF8fxB4z_OgtYAwAA",
    "tonic": 2,
    "scale": "major",
    "category": "Sad"
  },
  "T10 (F minor)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE33O6w3DMAgE4IVQhHmWWZD3X6Ny7KiuRMzf03dHZpKCRAe8PGw_B-yQyTQyDo39DPDSEQvWcZt2VYt9_rqhTc0B2sptOm3T0g5KpeaT5qkJ37bljr3WsrZt6WDn7Qhm-YvWn64_t5O25_M69t6_OtzeodABAAA",
    "category": "Sad",
    "tonic": 5,
    "scale": "minor"
  },
  "T10 (modified)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE33O6wkDMQwD4IXEkfhZz2Ky_xrlmpSm4Iv_ik9yZpJCYqBdHrafow1kMt0Zh8Z-hnbpHUuv4z7tqhZ7_XWjT80B7eU2nbZpaYdyqfmkeWpqT9vyib3WsrZt6WDn7Qiz_EHrT9ef20nb9_M69jHeMkojudABAAA",
    "tonic": 5,
    "scale": "major",
    "category": "Sad"
  },
  "T11 (B minor)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE1WQWw5EIQhDN9QYAUFYi3H_25jg62b880hryxiDDSIQn5BC0Q11YowmUJ6oRcJAixC0PlJ0sYqml3EScTR6ZE8l88vk6uyRPcUMDiz9MqXiXRntOkgijeD6HYZtaXr1MEfPOwWyVXsmfip9n8ap9MWPE4PAnhvJjJKPId1Aayt_7agWnfMHriBTikIBAAA",
    "category": "Sad",
    "tonic": 11,
    "scale": "minor"
  },
  "T11 (modified)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE1WQWw5EIQhDN9QYHqKyFuP-tzEB9ZrxjxNaW-ac0qAKHQta2HsDLcxZFSYLVNQbOInA6CPFkhGqXSZBdKB-Otlbwfwyvbr-kb0lCiWkPk25jG6Ceh00kLkLvSdoWxpe3dtAj5kd0eqZjFPpfeqn0ovvJwZDRlwkMqava2_gvMpfO6Zia_0AmEV0XEIBAAA",
    "tonic": 11,
    "scale": "major",
    "category": "Sad"
  },
  "T12 (A minor)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE12P0Q3FMAgDF7KqQCA0syD2X-OpRKTN-zzLgrO7EwfaZZPRAu6dCilxFnLiKOxnWR5kK9REKRxn2c7L93l5_mmkFhtUd5RqLNARkEun4Fnh3vcWWn77B6Xg-4TS8NNPRTbIvaPUZIFYoIOW5uu1PHedW8QPu5uR4U8BAAA",
    "category": "Sad",
    "tonic": 9,
    "scale": "minor"
  },
  "T12 (modified)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE12P0Q3AIAgFF3ppBKHqLIT912ikQWs_Ty9wmBmxo1xtMIrDrFIiTZSSyPF7J9ZTloncEzVQEu9Tbufkfk4ev4zI4g7V9RRpLNDmkEuHYF5hVutSom_voAjcSygKP34kcoesGygyWSDNUUFv5u56O5fOxf0BcgrBuU8BAAA",
    "tonic": 9,
    "scale": "major",
    "category": "Sad"
  },
  "T13 (C minor)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE3WP2w3EIAwEG1oh_MDGtSD6b-OUhBAicv4cz1re1pow1DsoUbghd7QmBRIdOUkYciobo0mgNuEiQvXAHlbBW5yHSWeaUong_AxDzrUvERmRlel2WJ8XHIXmCxdViN9mGearvG0H7aO8f5X3P-XrFq-XyT40tVoRvf8A96drGIsBAAA",
    "category": "Sad",
    "tonic": 0,
    "scale": "minor"
  },
  "T13 (modified)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE3WP2w3EIAwEG1oh_MDYtSD6b-OUhBAicv4cz1re1pow1DsoUVRD7mhNDBIdOUkYciobo0mgNuEiQvXANczBW5yHSWeaUong_AxDzrUvERmRlel2WJ8XHIXmCxdViN9mGearvG0H7aN8_Spf_5T3Le6XyXVoau6I3n-Q2uKYiwEAAA",
    "tonic": 0,
    "scale": "major",
    "category": "Sad"
  },
  "T14 (F minor)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE32SyY3EMAwEExIMHs2jYzEm_zQWsjzYw5r9SmShWeR5niavIYczKAxJZ4cXYshrnKfVCH74P0B2R0EgpvSK2eExomcHvfzHb84nskrR0gLvVR-5x-vEZ5SZmmS0XnDecGQnrUtMVJg9dMIDxtSUrjuL7dk22fjRvpJcg5rDkfBQkUBj2FH4FRuXmLjFFDO1qEEBPThsJnEFYFDXtP-S-ExiItrWGj5lnCdkgFuFPtnSQXPTihVb92gcYLM001NZ8CtHjbBtbBx_trmWuWfHZBe-p7yK8amY7LTuRlu6LX91b_JZnxMeirQw69B-bz63TnLiIeIZ6VJ6-Z5qduyabOtUSXGj5FtKbq-qJltLe13ECr4n9yRLVHS2l_HSvUZ8nFQfhUdkk9vIYzV9kEW4W5kTfYX-lIMHWD1Hq4TmkhdjXclDHif6122_vgCS-ybgEwQAAA",
    "category": "Sad",
    "tonic": 5,
    "scale": "minor"
  },
  "T14 (modified)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE32S2Y0EMQgFE7IsjscVS2vyT2OF3aM92rO_NpQeBdd1Cb0GTS0rKiPXStOADXqN65IY_ul_oirTAgQSLg3rDvVh2R2loT9-vZ-qIhhJSdDc9eZnPDfeLURYyC15weuGw9NLMkiIqTwHN9wg5eyUcWeRM1uajR_tq3oPKgqFQ42JDIkhM_ArNpYYu8VEuXMUWxFKrYZ0EmUAAlZ2-S-JdhIh4pRk05ZxXeCBOirUZlNaiQqHbYF8RmOisoLd1bkCunLEMD3Gxvyzzb3MM9uaHfiechXjU3FVumQmUlxl-4t7k896b7gxXEwkjfO9eT868caDSN1cKXj5bjUndjRb0pmcVIr8LcWPVxXN5uDcF7GDn8nZZLKw9NSQWrr3iI-Tyhl4RBa6jTxWk7MqCqoSooVcoT_lqImK7NHCwb7l-dhX8pBXjf51268vw3XXDRMEAAA",
    "tonic": 5,
    "scale": "major",
    "category": "Sad"
  }
} as const;
