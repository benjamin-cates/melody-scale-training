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
  "A02 (E major)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE31UWw7jOAy7kBFQD-pxlqD3v8ZASQfbnTr9NkXRlKjzPKVfC4d1oEHzzna1Wnit89RYbvvngwDFHaatUjJwk-X5AO_u0qKpGtvaLzwXscXL0JtrG6klihtfy3OR2xI9ABTTrEphEE6J2yIW93_U6SIpHpnhCNhVMi1W6GvplLRnpWV3Kn3ZdIlipYChjrxK9pLsIEQBTTcvV4lb0hbsw_zlaD1gCYFWIVhucWP3IngAQjdFVwZd35N6_3Fbwf87-V4F-lXBwzrDLN2L7IgV08JS0lVEvW7rbT_aGO1VIU6HxzCep-09ySH-NPCHJzm8H7O8eH2voQ5AVRuFNs26sXs3ang__Lt3ZO91Dy-YISZRqTfv_m99EMpUSPg82Q8NgjHiw7RfRshkUx2gV3TUe-J7FSIjucWb0tVQ-zE6mVh--aa-B08g_w5OveNi1roW77GEMGVWJWeWd-plUVc8SJpAftlosXwaPZUQhgqXThrq6uJYfDB_kmkBlBqcOuKvw-IP_k86vywdPfuTIpPQr1v3cEhlwmntlrwTel-5h59OML_8fNhHmWBa5n_j_REgmWS6VkS7QIjrslk8gfmPga8_pywsi3kGAAA",
    "category": "Peaceful",
    "tonic": 4,
    "scale": "major"
  },
  "A03 (A major)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE5WUQY4EIQhFL0QMiFBylor3v8YEuqdbp8RkFm9V3xKf4H3ftQ3AwqY4o4AD7psp-VgEsc1EWrO0memMpxvu0-T_pplIM7QOUkFxABeyzhNQCyLqhJy2qKWZ9V8iygpi-zT7v3nmpQbkyhYI4jVRfQFdseBZe7iryeZtNR078z4qXqd9CW-s4Y2HKzLDCZDVdBhLLly3frML1yJI-OFU9LXIPZm4_liN41ES7gWR6sSpm_vGseyjtjgOY2lSkHji3cWCIJx0MeGi-XQhhKvj9wl72sVEZTNWhy4mWoXH3TQQ2VZe_yOcqhevX-qpmygGcJHO_fUa7LqafPye5rPXpnnh_cu5FB_Hp_XsmD6RD-XZg0s-jmQfxvgBvQ8DbZ4FAAA",
    "category": "Peaceful",
    "tonic": 9,
    "scale": "major"
  },
  "A04 (C major)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE32UW47DQAgELzSyeHUDZ4ly_2ussBVpE409vynhCjS8Xi_FCn8vObIZLRJeGQGNJe_1epnNb0ZEk6XWGuW15HC3bpQnYOICnHTe0CSrlfRCmGhepVfE_stHd1clRENobv5QXEelyt2rUUargT1uYJKZrYRRYqgpvIJbER2RTIhYqQUHu61th7szpaxVg47zX3rfwPx-V_9sRW1NbExIg4RpsfOhIz4iQLkLTIpPDfHxAEJZklZdZ0cUC7L18PEARAS0aOuHkMR4RKBc21JFTw-9YUlGKNmRrUOd7YBuNXCIiHtGI0td7KE0RuP_exgLRsOtNaUKzk8-sF8RjoZZdKdWwgMPreZ4mEl5pDeuiV-7t2FJmpJp1or-pGPWbOOR46Fq0YX2JB_SkaOhUu7UQF5J8rphyRQJpUVkX0kyWdiHNCcc_96F7zXq54KcFucWbtDv83EOe4ayX9r6uR5X7Pal--d4nOx1lTbs9-3w9_sP-NXYq0AFAAA",
    "category": "Peaceful",
    "tonic": 0,
    "scale": "major"
  },
  "A05 (E major)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE32TW64jQQhDN1RqAeZh1hJl_9sY0cnNtJJKvstlgTm-3W7qK-S-7EAHLZ0l2mAvua_bzfS-ZJ4yTSucXtpLjhCBMQ2SDXSc2txp9RCRjDJPBbP6lHIv9W4ikvQMQDBayE5rY6vpUA141qnEXhki3tbwFBdpO7U815ajuqTCwpPGYi2MM00jKgtw5uh9OwWOc3O3FXZfemjTSQCkCujLx-x_Uv7dymfM95ywzSnGtBnMNqEozyGAFb6XhyjUvc2qEBz1nN13Z88xv8b1HYOckS9J9XcK6hBRDVFKuSXrQcx2vZp5vUgB1WRE3yjg2D4tqfiFAWfYa2gvCp6xfYDQY37Jrb4fr2fkF4zZ9aJiRWzBUBn3Li3QNQU_3HX6dknvBxo6dbuG90xkha9ZYPsjPjMcbP5-1HswOuUzRYp3h5ScX77Uf-pnnp4FMRF_sBpn-_SIZoUaDMiQ5tKp30eU-5MqZvT3DLFlVaeJBhGkOgMPAPdU6XTR0tj0CC-N-_0fWoJOhioFAAA",
    "category": "Peaceful",
    "tonic": 4,
    "scale": "major"
  },
  "A06 (A major)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE5WUDQrDIAyFLxQk_-pZSu9_jaEb6FyUVQiUNn15fn31ui5WMAbXGzDJsgBvuC6h9owExedq93xZvd3BBNxiwZ9b_ZWym2DtseLJYopN7BRLMJ_rsJxrRh5FQCc9Whm8DduuO9q9yq5b69cqvXvzNWjlYGffC4fefcwCn7LAIYdjFDg9SAL_kQR-RIAbgTJVbt1UwRCc2zvs5nkukISIZqP8xEQSeeaperONHUQDJDC124KkyYq9d1sG8UjeI0c79QhQi0gGr_EA_QZ0oqMhHQczaNex-kLnlBj9hTOnJ1KP4GzQ6wJHP8eIFnAM02kBmo24RWiUQA2sownEAzK7c8UCMnR0_gCMran5hEYF2ihM6sXnAl9-KrrvF0FDx76XBgAA",
    "category": "Peaceful",
    "tonic": 9,
    "scale": "major"
  },
  "A07 (D major)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE32T623EMAyDFzIM6i3NEmT_NQqluTa4s-93iM8MRR7HwTqMzyEzKrI8icWcOWTgHMchdA5MKXNnCtPUoBqYBgins8BLpOzS-kpLE4BbsDpJetQeS1OrUswz1U0EcmlzpeXGkqsQmajHnsptVotL1KFAcWsVK600NZnMwkNE0_cOZN5_fQX4-V2b9R-S_joctnxY2-R7SpxDl09boystvRgJSvsKt2kgIdVijhDLC749vDf9Gdg-W2_bj7xq34OYAJGBEqHsGbfntdZAGpmQJAbn_grZ2BuZJN-KkG32mdq-B9XUR2KxN1Dt9a-HXvG1FIQmV1BIKjnk9rs5NPXSHqm9arG-M_XWnrm94Bsv1PD37CiGyfk520E9OSZxaJUhcMm5lugeHaurh4ABtfP8AR-1V_VtBAAA",
    "category": "Peaceful",
    "tonic": 2,
    "scale": "major"
  },
  "A08 (B major)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE32S243FMAhEGxpFBgM2tUTpv42VH9nkKtj8AsMA5zzPXKHlQjo8l_wKRrpwnsItl139HYZ0aE8rVMJu2nXT6G6zBcahAPeKFAvwFMhQhcUOcq8osUCe_tPjoPiPQIbsBOR2EKd7kiuUYdRKxPxXXacAQRPUwxWsV2g8wp4j3kM-AmUnUB4Hyy_U3RfqEGBrX1is4Lsr-ZuDgeHnC5R2CjRBZFvkO4ft3BJ-gW4UFZri-R1EXs2fJLJCHBqDRFsUKT9XSNPnV2LAuHIxaeQKKX0ROtSrvaKAxpTFL-mfx0V-sLgyMGGUBGmXiHcYNK4kGo7XH1c15XGSBAAA",
    "category": "Peaceful",
    "tonic": 11,
    "scale": "major"
  },
  "A09 (D♭ major)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE42UW6rkQAxDN1QEWX6vpen9b2NwMpdJcyvN_AVKEapjq16vl8RyvhcO7UDD1TrbqLXwXq8Xa1nujw8HXMygbErJyJXL-73k8K4MNyXODy4c3V0sV1K9te3U-9ZbxluNre4sIU6x2VbMA0B5qlYRCvEryYPYAUmxyAxDQM9byvL9LXXMo7xS4EFD_qXi8aB3CAGmqZVR4gyjy_fhbfx_UcynmdjYg1UIL9O45L5ctnI_APk3BeNPmL27D5w7yZHPguyzx7hrShpFaHWBpz6xiQlfFWJusAjeFoxHdpa2IyRZ2ivH_U7yy1RznG9D5ZfdqgMg2Si0MuvUGh60_sHvXJahuNH2-MIzRCUqefnuyfXhoCchYXOk37qAAXHDJh-9tGhFMkFV6UDODw4a4FbRUdfUZyxn8OzookSq0zVjiUzyFmuXrgbPNLO4uzRTzV_4KMv2tZdp588IaR1X32pvPu1UelalzzyvN0L34qnmf0OcXioqTDpdUZfzvvMypdQAigpzxvX67FdEppKf9N5_ALFN66FXBQAA",
    "category": "Peaceful",
    "tonic": 1,
    "scale": "major"
  },
  "A10 (C major)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE4VS2w2EMAxbKELk0YTOUrH_GidCynEC6_prx3FcjzG47bQu2lu_P6d1pzFEyBXgS0tGUAAFTrxDBT4VlMnlnSGJG4UBvBQ6-frO0AM3pgAb9FQwpba9M2wqgA12eWj-zjhxIwcb2pVDA0n6TDIAfv1FA1nH_E2wIU4FDuhhSwWDHrbygHPoeaXAHHrl4PAKzlIawzN4_WowoPC0gZZUL0Wwhvyr9mym1S1dQ29PiLOZCqLi6uXRqjz1OV-9BPOzlVv9xnO-_IH56qQkHv1nWIl93z_nhjSYOwQAAA",
    "category": "Peaceful",
    "tonic": 0,
    "scale": "major"
  },
  "A11 (D major)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE31U2a3DMAxbSDB0H7ME2X-NBzvt6xG5-Qog0pRo0cdxUJyAQ8qyVDnJWIvdAE84DtZNcdgsi_RlWtwCzVlXL8ZkIlLxMqCh9fHlOsvBpIPzrKqBBTi2gKsZZjBZEBpUURpMiuGszsCjKk0kWEWRwi5K9f3L0A-0rwZzB-6OFgVLcO45-iVwcZReQ3acTkcdzMA2vVmrQzGdujhRThmewqlqoWC9Uwrzp9Pwzqx1-WAxLyNDCpFL2IyECvxb4tcuRTuC-A7dmkSP3boTcmgFeqimJ4qt1aUCw6evNKySFf_XDnLUncObjqoTENqBm5NlE0LC9uh8Or_hNApKsPZow5mBvc9LoPa65G-PiFqTNntK3I6ye15mmt_R8mslaKb5PjKukXc2zVCbI1EIMhrH4siad2fTDPWNM18l_sVpdPhaPzmBgGaEb4jdW0Qzve_oPM8_vFRdZOQFAAA",
    "category": "Peaceful",
    "tonic": 2,
    "scale": "major"
  },
  "A12 (A major)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE21S2xEEIQhriHFEHkotjv23cePrZN31E5OQALXWxCARhEBTgxjINAnEBrUSgiRQbpBCtJIFYpDxoQeJo1BcIbA9XukIjgeRbkrasiACmvuHUe71p5LptHWYdDcbiB5JQGxpTSjvSBnUXPnfmwtobIBBRla5XcpE-iRyG7w5epLFNeCRTD-JLlieRMwfyyk741zOvzwpyXqS_ufCvPTtGtzQJHJrjK9Nr-0zAgvIWROOG0huqHgfwZBH21OgMGjXEGYu33EfhjOO9HJKCyWP2of240z5yyL7Tq8LwH4C7Qdakvs1NAMAAA",
    "category": "Peaceful",
    "tonic": 9,
    "scale": "major"
  },
  "A13 (E major)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE21RyQ3AIAxbCFU5OWZB3X-NioCAROVp-SB27x0lqbwJntIyaYI39U44AJ7AowZlR0PD6qHhI829OhgMTkWG8VHRNOe6aWWA3qnlKOMYZgyBpHTCJKpkhgklhR2mkaWTddUyWPFLsaV8WtKtyr-qq7Syzoek5Xy8xi9V1xIZehVQU4uKFgoyS4FrLogSXEOLVbgwm9mx4s7mjO5sxHC3ceh2WbtT3TqDebZxEXmdji6A_wLYCEsn_wX4uGl9y8b47wco15I0FQMAAA",
    "category": "Peaceful",
    "tonic": 4,
    "scale": "major"
  },
  "A14 (A♭ major)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE4VT2W3kUAxrSDAo6q7FmP7bWMgTJJOsM_kzYPEQxXeeJ03CJfMhOGwSgzCfGqe14CHnaZBIyb6fOAIIdYdxqK0XIsRLYn5BzEyzw0iLsfEL4uIjqbcQXRFzjkWwlXhCQkIl7RbCA0BHmXUTBo0LMm-W5apoqWdVOhK2ELYEJf0WYquSHV2KSDrqT2N2BJQAy83bqbkQ_1xfj5iuDDfi-qD4qvzM2HlL70sPdiOj3ZbxPB23s3EA-iW0jGv-l9n4nufOar9ZNJfdSsupSu_nBRhv4sw1353q4fDMpyGIp8R9_WpFXtO8EHxTv1qNlyPzz_b1AZAcNMZY_emKEvd79Gq8BPsskolD4jpbTU5TsywYVimzGohKNc0ufmjcss8RYBSh6fvrYreQLfdVoC5_fV8mio3pJdhnTHX_2PZJ04Hwzsn-qMWV5n--Vdf4qE_o9ID2ePwDITL7IFUEAAA",
    "category": "Peaceful",
    "tonic": 8,
    "scale": "major"
  },
  "G01 (C major)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE5WWW67iQAxEN9SKbJefa0HsfxujTghDQhx0f1Ak2qZyXO3i8XhIPActApNS5nANskwb9ByPh_hQn99zRamlGpG6p8msMRJAxYOUWEvXCh3GXcX-DKUkqVoLZBi6gjAKIkliFlLdCmKYzQKUZbEXERUQZIOX_dmTnaxyFqDRw4sYswcDJkRh6-Fd_1V3I1YicxJRyk0_quseWuFuASmrnC-5it-AfreXO61yom26i82m2xE27qTKifNbqjVScc1ZrtvjkrO_pnh1_sTZN_GtT7CEsQOVXpJMk_CtT3Qh4vRQhkOYy-7Y6yImTJRKgDPsB3pdThfjjr0uYWIeXghVdr1TYsvHZUiOrbN2h6-wV-s_O2IvWgu0YW4n5uthqaENFL9G3ljGT8h1w-LDqCs4Xo9VOreryE_U7bDsvtXHFXhpRhqLGAhqGmzC216EjvkS182NIB4VSHOhbarZNQ_Dx6A25TG2Of3vwbNnjFyIENCUEFeZLuztlVN4ee6fL6N3h41UiD3JQ2aK9CbPK9zd7OvIelstTQjVCfXu8W7udUTNvNuqcXk1tNsAor_wZjoBx68EoiN0v0-gmZ-qMKZAuOQtdp7h-ZXOHXie4alFXE6RCn6T7wuMjGHI0EzMyzPFvLboZUGYwTNZuWRfATycGjiyfGbGVN67l-XS69UudZYr9N12ZPkT-pmn56zuOKID35kMR_D4YXnGiTt-eV6P3O3e8zNNLWHu4fOu6C_Pzzh18qJSkCLz1vO6hDnoHR9be3nlklUpKsKKCa4yeEaqG6w0gkXv1w3PTP3I6umum7HORP38W_WKyHZSM1Mvya8F7x-FoMoxeGbqwfDPf_tlaDbQCwAA",
    "category": "Happy",
    "tonic": 0,
    "scale": "major"
  },
  "G02 (E major)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE5WWXc7qMAxEN1RV9nj8txbE_rdxlZbCV2gq3SeQGKyJTzzO4_EwXUKei6zWzjR2KCpYizyXx8Nq8R6_ZnuqppkmXSoWWV0EndlhkgbPTe9XpXQVEW_3RijD1Y_aEzm7XFW0GGapmzpeTn7V3VVSpcyU6IijeF7JsbJbJUJVsgTAkO9GtDMtkiVBAxesyYa7S8M0arONmFbubgopaeXGssPIZX9tGEkBxKIRSW5ynVS3tTtDM9BOtX4X90s8XNnZ6oQXK7XndDgaCDUA6iGk3_r2LzoHHF6Lu4MIkqaQ3UUtjitxrOxIEJTQpo6Sj8fu4htNrMmoNLXKNMk60Ewqn1u936haxlF_1Tl6Z9plBqPEVtt0YV2rz2B2jLUwL8HUynY3E3drUcUcTK3dXiblGp203UcttCt1r-_vIszYKcbLx6_6BKb6tiMq32iGfPfxTUZlTZItGWVK5nZCxLx0N8M6Ihildn_7dIQD25KBTGfcstERDg5zeEshq-7hKL7o7DCvjeOMh7d0dIz7x7W-4nKGR8e4_80S3PMZ406jVoqGlN7g4f_h4f_hGenwNzEPPp6TNaMjIlCOqgpQd-9bsM1Wj46gMHWJ2j_vVs8YfSOLpbAqO-fmjzzPmHb78TFz8YdujdAUs2bluz-cBLmOBND2fsX_lnF4-fmhVWsSKmWd5V77chs5d1O-G_BEh0j7_RLSnvAa2X1dv8-88jNSs12EkR6f-9Zyk3kYcfB3PfPWP0YcqIW1pFT667ixuEw2EnQCbJz4cnkAZ2Cyh1--LP08GrCmdSIE--cxXzf1u7o-T43bUccIEtFEQssLIz92YpiEIEaWCFNcS8M9jwcSbZaD4JnYDS9-8bpfUvCVVV3qFoHq11tjFoPw0Rpkm6EtkO-QvTYTK6s9U9GgeW8nvc5BxATTrPKZ0fvWXCPNlZXZYq62LdoD0uZlO4p6Cwwo1aE_v2H5fP4DIsTKTpwLAAA",
    "category": "Happy",
    "tonic": 4,
    "scale": "major"
  },
  "G03 (G major)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE4WVa27ESAiEL2RZFEXxOEuU-19j1XZ2MruZnvlpmUdBw8fX1xfjEL8POzmJMBmNkoZ12Pfx9cU-AnuTU2adRfPsTjYvnzmCh_TaB6eZObJdWQ6Nls-dwaZTyramJ0zLmpXpiXEFMLWMfQ5hF10G64A302pqrujaRe_SlAqSR-G2ftMTP80wQhAWE8ynHvXORQaajcLoo3pq0aYInv_r0OUje10ET1aZpoPdEm5rnyM2ing-vgLmZFzhsQvfVeOFSFVAcb9xHLeev-FjqWfL2jms1ft_exS5c5HR9ev1oQKdZmsasqsKRiz7O_jfAnSyxgCvGMYIt6C5BG2GVEtQ5DisFJJfCXqXoGu6WlXp1NidIH7KHT7_7TlyqSdTYAQxeDTotZg8ZXJjI0G0X0PqczxcfCo62t3NJ7qPWhkkkgOIuhUtx1f662TbpP8O0SUI--gyhVsG2jh9bzA3G1xntxHu3pM19mO937E-zdK7JiLG0_szh3opSlZkRSViPmNoVhZZVBkyqu8V29QwJxucpIreZf2BQnPKiuVW3mK43kFozm73ZKYZimto3vYHtqTfYGjmRH2GEBapS909LZd-nvgthbBI3aF0gyPc-Y5CwMkmo6qb1Yj4sMNYqK42lQem6ubKjkLA2R0O2cAyq_0DhbBQ_fc0vcUQFqsfnJbdFa933iVZpH5q6lqYPSfAky2fcUx4rbd6cGinaLH66UBdLje0Xsbvjoyu8ABurGwphDgNlh6hGqrxO0YbLYvSM8VpG8x9NRgXhvL7xV0_oJXiP8f4-x-lw4TGdAgAAA",
    "category": "Happy",
    "tonic": 7,
    "scale": "major"
  },
  "G04 (C major)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE4WWW66rSgxEJ9Rq-W3XWKI9_2lcuYGEc4HkG2vJXXaVeb1eiuE-Qv8GzUQpwIADNehvvF7vb4wigAwuliHW5U6azpUOTUR1vdZwHV43uAnAgDRUGjR98Y_iC5_nu9KiUk0XP4bzCLryZRIJERORE4mTLf5RfOHLTBfN4CqCkeXC23AafqOGTiJ2ovejN_xRfMHrPEuD2tvf-Dfy2Dz3zrLUsRoet3hrvKZHZZlCpMtFhsVwv9J9EqkTp1Olm65ZmT017zNdKwNaFhD1g27D-UqPpp_lWXQefq98NF0zokrNOLfec5je0nMeklCIKy8hJYdiWFzLa55EpJA1J9O99tJMzXTXzKgqM3vraMNupoRJZE4izizubY1vL8VMt8o0rWRofH8oU9M_W7w3vpVe_dEGNM3kKocJjgV-WAHmSRROKs4hXiw_-Dw_68UIwuoew_zWINwGjNMiLPzRyxXf_gvN4gLBvNV-vXqza3je4NuA7iTH3q92nJ9WmNuAXpnQQsDq2OHdfzwdSKD2VHIZ3B6s9wi2597D236lCS44LLEmq9bFZwlIMwa3-f7Jyk_xldzWy8qCwgK57cxzSHN7L0_mju-pzW2-1KwoqFmkfk9tbvfByd5h-SO1c6ajElAggLLvqc1tV5xMld9Tm9uv70w1yDlW7_Rpx5aTiQtL0ObY59jmtmxVwhTJqPie2kKTmE-Lad9jW2hmsBYFSM35h2eFJzE5ubiExJ59z7ktPDOoisxIhHjb4XzES-NPcSk_upfGaxFjLcWylHLP9lYcnZ_UltjTUvAopnX9J0R-3G-bGaLFDHK0IGd7X9jeg3LydKmM_QJ28cNTfZ5-Deg4gbneeidlTGI7WfFIv4dBxVxNCIMJ7n2clpQPp0FyEqtT7JcT34-a5MzQKoYRko7ww9NZk2r86Txs_wc92Xt-NV-LA1Tmth3ZPpvHKfwfH5PYnXL_rdhc8rzGmBleJTC2pD0EP4fzJru1jXj-PVsv7h26_Mi1p8wpxTUkiu3v7z9uXwScCAsAAA",
    "category": "Happy",
    "tonic": 0,
    "scale": "major"
  },
  "G05 (F major)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE52VUZKEMAhEL5RKSSBozmJ5_2tsxYyzit3uzuTTAeZ1B8i6rlqSetKWfNrSlKuKn0-atrSu47fi1s7H05Qvwe7eo0c9s8TTLh9aW3pa9R59_ftOIFnDOUWXUChJNlCbkUgUUHcBczLZBQhLCwJ23XXB0SUK2IkqC4ZEb0uVpSEiX7ClCokW7KhGR0dpAqLfOaqR_-nWDOEz9y3_o0X1mqXJEE8lDtVo8W-D3nkq9J4orRA-mHmDr9BMwfCO4BmPB_jypNQJfHdeE7svh86TaZlhJwju-jmDzqzEljkvd6XvthmSb8tyzmivEfYF2nOsY2Zqe1LY4PUQhS3M9YAl89kCrB2wey_yrA_8kInTw-in0aiKR0MmiKTkMRE42QxJkABrNBpZenSYkfEQQQKMdIsUiMRqF4j04qG3LPHxeX7Ole8QcAPKuxTWBgLYAIjCGR8Lyo8WusvVj-TGx-pRrQW1o9_2gYGlwQi8olHtvzda00uM9KwodvsBqOYqWDYKAAA",
    "category": "Happy",
    "tonic": 5,
    "scale": "major"
  },
  "G06 (C major)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE42WW27sMAxDN2QEkqjnWgaz_21cOEE7aSJnbn_HoWnz0Orr9UIN4_egLSqIYRAFczAGvcfrpT5_Q5kogQMsHCUYtGlVuHuKCHMa9tUY6sOs19uqygC4qgqCfH5ybH7fgOcGICJ1d5j5ST9bfZ765B6SmRrKsutbry-bViagzExW4jZXo4ajVZetKp2ICpDgQ_zRD-YXDKhFeGmKff3Ets8GbGL144na5b597sdiGn-9Dvv38_pmRAKAIyKTDzM6NIdLqx67HPVycc3_pLc4XFzy5z2eBV_ZxY-ldl6ylyfvdYl-P-gMhVbydQkfT9Z5diPhHmGmKZUn_b4aTBdWdN9gESXPbkQRMfZT7_7XPeZZjHtUK_cyQfFPVGdqF-7RcLjsNS4g_kex9anIrBcU47nIrB2Hzwasw-v5E--QWQPM0RGwIpizIeCRYM4OgiXCsyKhgJEqQPqd4FmRECJOd1MRfyJY6AJBnhCWDaWgIHUuLyEbwpOw05_-BtA_1nzJ2L6sl0vAxzDQ5Xpc0j0gzsVp9c-DcExKHrqW1w6Gpbx1MOz61s8NsRaGRWPFGxig4wj3Lu5_ScDjFJ5zxMs9PTNMKU_mF_qzKR6AGVO5VTyan03xD2wp328nW3hWt19_J9UxqGoZbbVPyUIc1I6q4-Hp3YM6NFfXgzlKTmjS-WXr7x-zW_dZtQgY8_-sblb114NZxPus-p0-vFmFFIwRbqHFA7OLt5dn3XXMcn348ff7H6tkk_IGCwAA",
    "category": "Happy",
    "tonic": 0,
    "scale": "major"
  },
  "G07 (B♭ major)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE4WWWY7jMAxELyQIXIrbWYzc_xoDyt2ZLLL7v0KT9YpUjuPQGKjH4GmVBpVQNUKwDHqM4wAP4DFoRkWEkBsLxIgHzaoMhpuUuVRy61VWuY1eJhFBEihimEfLjVvLFQUFEEoU0VpBqYWKI5K74nGYXmhRKelCWuBQwhLjQhxGwhCBUUiqr6ZjmF80XVUMZeIKSrfliQz41Zg6qyItwlAS7HrvCvoDFmxGp_9LTsNyy8Ta9Jdhn-1si3v3QkRpnpUky0b1VXwjjw-ii5DvCeUUhENNCVwZq7TThRblFgKKTO1ej-NsYSMNpP3Pib7gkanlyqaaCISwj-wBIaVkxWJl95GtWeUMLcv0zFpJ0dhqmT5AnmRqdLI2ZJi7-MeU12i4k2WSQU6pFf5SfSfXD5R5YyJjCqykQqHOTfA4zoDvtCikpTOnGJfcbA9jBjzSXUWLAk88uu-60_0abn_yudoH7oQDSuySTC72xyf8g-mJSUZflh2mDvnrvL-YLnzvhH0eot4g3svrnaqtFTpH_b5FNAUQttJUUl1pxB6p0EQpA8kW7j-ULo4nzfi9bqqCOC057_xmiaSTDiIO1iinTsrdFkknfZ029zBRu1sjkQ-ees9HOuifg17zkU4YpxU8Q1Tkno_YBucVHp_rV8_X4g6PT7w9E3rHx2dA1YpAEhD63aLzHc4AHNAM5SjK1leJZBRHaETGH3w64kwkFuQFSr9fIcktzxMRzTe_eEhH_GvURejKde2AnW--uOPnSi_X366J2VBuI796l6E-Tu-_q3ccXyLAL38svsrLRFZwiKgb6bqiYuN6ObTzSxZgYY8ytsfjH0DlEKM2CQAA",
    "category": "Happy",
    "tonic": 10,
    "scale": "major"
  },
  "G08 (A major)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE4VV2a3jQAxraDDQQR2sxUj_bSzGfoffxnbyFQS0TFEks22bYaBfQ6ey4XChhFe1D3mNbfMc0NeQWYwqAlosherQKSLZUh5KiLAWHrHAyqrwKO9gZUcPnWCndxhTla07uO7AhW7pUocK2uObiuxkL9mQzepmmTQ71xMh1_NtGqigtIqsV_mOtjs0SFdaoiVI6R19s6jNAtEEOgXgPtp1UU-5pG6TZAbTDWJk7NxzZ-OMkFJUKcNLc_gMOX92IV2H50hczvdJnn-09YRhZF3CsZQ8X2oX3zgyLm0Sk0x6JjUtGbs67sPzcnwuNqkFyzbhIrFteSNmTbxTP9a8AhdarVhtmih8EYGOQ8w3LrVWNbamiYK1Uz-u9D6-p6GR7YhWXzbctuAdFkyLYCTcCD4PLiQsFWKuiM8X7fnXMN8e87jblEt1q5KgmTN_XKnjMPJ7oGSSERVmat7c1bwvC10BPK0cH8rD_romH7vD53ukbrvDZyEkkXlw9M_dsRIS5ujwhNLxVB6KaQhIiBcg8H4qD8XEWUbnU3koFvn6Hf-5PXTlNagR3e1B4Kk9NCboXe7tFk7Nj2bTFXCYeoV0CE2f-0NXwv-_1n196ArhuV3ruT90mf9tg2PfC0G5rHMi_xRE5VySt9OR67E6pYTXbLiWjYBqA0U72Nz978g0mEPLKFnOo3Du_ndkghaqVOtcBO67z2T-NGrm4YF1InkNm_5zC-swX2DuX60FaZRdld1l60T9pZU21-tr2Mq2h7toZCT19foHeEBA_DkIAAA",
    "category": "Happy",
    "tonic": 9,
    "scale": "major"
  },
  "G09 (G major)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE31WW7LjSgjbkItCgHisJZX9b-NW28nMOXPt_slPBIUlJPr1enm8DxUfThChcKAzeej72PwpVO2JYHhbW8aJ7ns0RBXVPdqVTNosdOAJTVWbBhGpE4aFXjWQVI0qDXMvasVhqzXGUtnhlZ0LTK7WmJoylmqS426Hyz-dz7FZT2ijh3UFWrWdJ7ifwFTv4mTPmEUvcOoTuIjxmo6YhF3sxcE-0t6HiU_Bq4JTMeQRa3BvGpBd9NqJE2sUq8lMLfX0nTYU1UAFTIOOHu60oVCp2axoT0VupElRdVY1ig7XE7s-746RElV6Zlna5CyWX681-T3YyIYPPbq97ATzfuQSaloCrVlTfXGdJ9cPJS2qBTL9U_opST3WSCZQeCEmy9Q9jl60ZEZXFevcbp_73iN_vgOhZbWje2QxSa9OmpOxoRsqa0mjLXQ0_RrjM_Idi1i2rJ-L-JfGW7SxMYMkiqNbhbBM3BnpY57l5jvxAVkdxxNDdl1Ocz9Yx7LQ__2A5fthaEcWFXFx7g-JYkJoOF0Bt6ncKQSXD4wk2IptWi3jT3vPtAE6u7RCiELLPWgcn8s_6yufmKEojGaecA5ztqxTvvZprqnOfdn0JqCO1FDGlZxPiQVKJaK6HRZpl-fOyLrVJ-V3LG8DCymEten39_LbA7jkl_tWsG1OT8mfsGcn1no_y9PyrQxrBH13TDCyFk-L5RqFyxFPxwQjlnRGf5J8d0wwcm6eqVXYzGWIR21GKtNijJGGj3s218RUFJmT0WhYXWn7pI7pGsaUZUFt5Y5vw2qNv_d-m28GIXIm0t3KS3cBZya_XxG9225bLi4bq47yyMidc8zFsiq-j4kfUXgztQvR6DIfoOLa7e1FsWX80UaOn6-bb83jSbEQYuaH6XaZZRQ17dJUs-T-iNsy_r-vj0W6ynh5N8ZNDZF1WK7Gny2M0Kz3-z9uiEJeNQoAAA",
    "category": "Happy",
    "tonic": 7,
    "scale": "major"
  },
  "G10 (A major)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE52VbXKFIAxFN5RxyAcE1uK8_W-jU22VR3PBV38nJxLPxX3ftbwobdqs9I9TetG-WyJTsgpKtpxY--fuySnu4a5EQMmIla5H456-JIOSEdu1eNxyljBZptxASUTVQuU4vzd_2w_ZNTTG2eQlj3MVygtEHhDHyPOEPLyOUt7c2mzenxOUxfgSjVcm8xDn14pjnIc44GxdO1snCwbKtrWybUIFe-K0VpbT584yr6Vl_sxavuMFgLNwxR6xrpg6Z_KW2_tDfNpRyRgww3xpIUPX1ZE2zaTAJ84hEc0vFw5_9DFBXQtalXc16Fb1z7H1AXYMVNeCdtqupcOY8pion1sEMSXdcxFTxjR1LSBMwl0N-q-MYbqVOdwOPBVZWCVjnlYaykpk0ZAIPBVbeyqGzw1_03ltlOR_cMsDbplw0dZ8rap4vFl4sUl9IFWdSOWg58zVPANjrh4sQbtsoeXqmK0HH-1bvt_lIsn0b7heX7KciNy1CgAA",
    "category": "Happy",
    "tonic": 9,
    "scale": "major"
  },
  "G11 (B major)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE41WUY7FIAi8kGkUBPUszbv_NTZg3y5SMeungTKMw9D7voET5U_KVxtt2JPyJ903YsKeKqRK26By5ZztTZOs2iQYmJZgTuVCBDRHg0cUzOsdKaAHTYS6XJJsjtYg2NeAy6J5AFGNgpnZXtWHoZnwgoLCjYVyQoIXYn0hyVEwM5kPk7KOLdWcKqZZY4NnjGEqAJ26rfJW9kqDKQq2fT6tTjDyVG2Lh4Qfi0crBGogeSkPh0sUzNwsP9opcOI9M3SN0f3Hf6UfwGeh05y-yDOo1N289FMbfTcuEUHdj4vCKRH67uaknp53uDGBk3CGG5PJCymZGMEp2Q3LnC1NqS1NYLusVdL4bTqIBye5Ux9FzcFenea3gNMcr20HbgVOee3oiGISYHV9MokiLsGem19G955V1CT-3bSYBL5UFAESl2geUGifRf3hJSQ1ucDhCu1UfV5gbSu8aaVhyqq648qTIZ4RGEas3vldK1H5sRFxWF5H179nKLDhRAzrXglEPJyIpyyjlZu3Io52bl5FDDog8tOyJwfUEXy_08qlRrlo9MXKEqgpmJQ_I9-XkJm1Ivt8fgBGQ26nSAkAAA",
    "category": "Happy",
    "tonic": 11,
    "scale": "major"
  },
  "G12 (D major)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE5WWa47jMAyDLxQY1IN6nKWY-19j4aSd3XbsDPZ3ZEL5RIt-PB7aXweGdMHSI-iZSuWBr-PxMNt8HOqdGV1e5h1VZ3UczHmgmqHV0AxalRwY3k1aR0d0W8asd9mpJ0WESJZSGHJWx7paBoBqRSACoryTlqFERMPpTbSd1VYHOQ94tKo1UpXRYvMAAfeAwQwI9fOA7-STUDUIJQg7G9c-1X8qHXrHWMf174IQUqWuVjcUdBBiVmh0QyrvKOgnYL8DbP8D2D4B5wvw-ZvWgfQ2Q9OJWf8OTO2Or42kAikWXtT65ptLcR-AZLmomOJqfIfbN7ifzlhofwD3Oyw-G69u6RSn4_J_7KhwABoZUk-pO20OpTpNIkpo7m-WXtW_I38Sf0Jc1b9Dv1wrR-isbyv3LHGnWGkesYK-mWcMpZlTNT3pca2R2hWfBlEVNYFfzvLNOGMJHEdgfc9zRXx32XJJXA7Wcpo5CIe4pnaCk9vjMRfJWjtp2aLMAvl3hZzTYbeHZ1jAWilHDcAYpa7huHV4fcDuu1-sJWzZmqrGOT8zKQ8GfzF4j8VW3Rm8h9LVUqvEyLZfDN4fvOUXg_cH8tc0sWxdsEC-ywMMJUXbvLKZ8jT4Qd1pE94IMwvDM1e3YYYldHtCz34Po0Pkg_p9VMoa-7aaYHZZuzZK9JbLDEryL_arOnY3SHQANKrF-e2-cV1Cfz1OVuIL6LtbJDM8wyPdOot9bZbvnPhxQWXGZ6i7q4filRPYqM_8DKg42snyJ5ht9QK6-tMAywP5xv21XGy-T-LN14fM-PwHut9zmQE6d6knRNhxBf-u8xmf_z4Tbh-EMuPzB_Pr5frT5TM834F__QFhPIkP6AoAAA",
    "category": "Happy",
    "tonic": 2,
    "scale": "major"
  },
  "G13 (C major)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE21VbQ6FMAi7EDHCvs9i3v2v8aKjgHM_R2oHXanXdUmjwj86jzQqnT-6rjTuI49O5yHlqXTK1TBHWVFNUajwc6x2BE0ONLzSMGgq5QyUzO-AETAJ5eRFZaLMXlOyrMCbLM1PgUkg49BWWttKyiRWyffRr8qgGYEmT5qI0oYG5Q7UIlsBU6VyehGDzGeaNSUTKjZdfV9YXXR_36pkpkEFEzRoo1J7K9BMJ69MSZoX0BAq_c3RfTQfv6_ddO9mCnCjxvuq4a_mcw2I5KiNQny-x2D4WwaVEqr6dlTcwm5yKjYA8_tW5l1zrFb3Gdi8bqOzLNsAq-ccFGP1upuf4fTMVE0zTgubeR3ta9X85pPC8Aa9LcF5WWlzvQ-vng8zmeld8mWXGJ4P4qjjxS-D319ZxXWZse7SimH5iPvk1XS8X9i2idU-VG2XWdwXYfoutbhvYov7Lrd4LLqGHQjtjU972ALXW54VCDl57tJLbAUCbpNfMv1vOor5PyaYIOpjhImvQNhQmVvgKGyBbehEfdqzvB9q5du0MrfA27MtsJcWrID_Yh7___7CUfkxGgcAAA",
    "category": "Happy",
    "tonic": 0,
    "scale": "major"
  },
  "G14 (C major)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE5WWbWrsSgxENzSYkkoqSWsJ2f82HhonELhxhzf_Bov2aX0c-ePjg_NK-3zhqlF7yZptlm4vfL4-PpL7zBXTZYW0TLPRCxcZIM3JES2od3g-hUtywDiTDfPY6ODTu-0C4KSLzKDXO1y_H24X6QF4zZjg0W8Ue4qWFD_o3yiM133VX1BmWkDYdAVYfrqoXz-gwbSb5YHcl-Xn743STyi-KE2q6d5U3Ojzumn-iec1M5AmlO0aO1U0rh_VDPackhiXlK5CKwN70e969q8ksSQEHDMsnLOSSxIq_350SnguSQKM6UnwzREv4VeOvGZKKkqRKr8v2b8freUoIHo6ifATtC6JrUooLCreuQ49lUYLMoB82gwb9VyauqQwoDSlgd7Zex7c2jYxsoemZPvp7L5IEBhMeaFPue7rl8l5HuK-ZpQwxKgT46chnuVIhhXRFqhT-831XT9FVbmfR3gWpBg0gvNVx4c72poNpQoqmMU4Vd1WbD6MSJ-pIM8TbFiUUWWJw4o6T7CtfcqB5lQ0iqdaml_0oapTxFTZUYRrHwYwNQWh4zzDtvrJVM3IVdXnzHBZBNt_Csyxs4yXZKU2yj1rbp88S3nV9l4kOXK380VjUZrBJqzDdUziuu3_rKp1m8BI9ykF711lrzsz_8avgyJgqomRfW2rBweZLnoHo-E9Hno3wG23X6MlD9W4vLuq_ijpaijEmPBOROWxpLUsUuN-SZ9LutZCM9He6Jg_KrrWilY75Ii-Tf5Y0r7u_eruJR3taastg5ohk7f9sTVtvZUGC03mmJ8_J2ZJXB0tc7TfnfuUwjWXESZMWt0oh15ZczHUcqH6a-IeWsWxJAmrmKi0jFOrOC7lSF0SqP5jgfuK6725e4K7V47fNbYoxYR5-8TXCnr6ZrJFGTh8OGb112fQSpHDtPTqirlb5en0laIMbhrG2L3yH3rF14kwpo9XZN778HnV-jrRCSeGKAc_P_8DCrHinVULAAA",
    "category": "Happy",
    "tonic": 0,
    "scale": "major"
  },
  "P01 (B♭ minor)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE42UUa6FIAxENzQhDC2CazHufxsvgPBAuaKf42mZUjLHcXCDiyesoYM9cRyMEFsFQ-eT6CzENfHSCJGmSSiih4QmFkkgvknbrOFVGyB702LwtvuYiQit3rKwI7uA1gOYHPd1Ls8kcBbpZBq_R-k-RSbUQjX3GH-LQFb_r_t4RQZP1uqyoFwJCe5wgsQKNEwnaN0KMWuonck3avTJLyXF6Tv1Bfnk0JtP0OTt1DeQr1JPhNs9KrbFUrb1ojezJsIKCcbOt_CTX_oKgy9voo6jh-mNddFAvZly96ygzsKC6eE96vrooM6yg_oMD2pKj0ev8bRnlFBvWVLK-ijJNc8s8XWi__xw4OqZMFSgNJoA3cJ-Mx-QMuyOtCnmh53ZXQbWgfG2PT3PP6dWNpP8BQAA",
    "category": "Scary",
    "tonic": 10,
    "scale": "minor"
  },
  "P02 (F minor)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE42WXW4zSwhEN9Qa8VcFrMXK_rdxhe0489142nkdNXQBxem53W61TJbbivhacngzu9qtM4m2JV_rdlPsThzRHd3lbpmJtgn5kFYPEXX3zGxDJ-5Br_NGShWb5iaZnkuPV3q4VHjchfEiO0TKnaomnh78mJ0kAGhBqKz8fw1xiAjJqmpaV2LZfHL3iIjSaL8HqS7zt6rs-KdL8O873p726RCZZhaSwX4M4uIsRJUpAAtmtc38u5RNK-OA2KmbsU2NQ8TO2bFRjVENEXwXeu6595V1OI05dd5-HLoLglh5WJa0sf-Z73VYTj3uoaqeEvj20Svit5XyOPkOWbrrbk4Lyr0jGGX6p_xkV3XT3VTlXSVxJMwg-T07rDpEnMyqtma47b1aB8SVmWbI0N5OvadLZAIoaD92-WLoPYNQplerdeo2scohEmdS7JZeRvN5Ee6Hl-q6ihgK-clN9whfKutCvQ5Zojw6okvJN6zLrvPUbOmAItwjswwdu_aoTRHlQVV4av0l_6DiN4cuah5WQFleHXT9odCO1oOMIMvMMqT1I63jcK8IalQqzXtvNx3MhLIEFC3mHTOOFXl5wQmNCu5hqgMm_rBpB1MdLuG0l6cNw4q4a9IjWAoKTDTde0x2nFhmobs7hkdxwh_28odDdEcENMrvrlAuzxVc0RP0bEMhqGVCTBQE5bCsMOoe3TqEgDtUNcX7Qfor_cOHVLaADnv44Tr1AOL04DzlX519vsBmLUnHHzbAhhMgC6AWvHfPjg0nXmR06l8uGFLk6S3YVGDDCP5Q7i8LZoOI8w8LPiyY2eHemd1Ghj0nsPn3GK5kOTrgCpVPC2Z2MB3IglETD89djtiGQemOzEJb3R-yqwEMglgOqlYK7WXMk6HfLJgNhYpsgNCqnUFtgFLK9ups3uVcix86JNlmLhn-FL9CVuSCvl8vG070-Zn8-voPX2EVp1ALAAA",
    "category": "Scary",
    "tonic": 5,
    "scale": "minor"
  },
  "P03 (E♭ minor)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE52WbXLFIAhFN8RkBJToWpzsfxsd-6ZtQiGE8DNy5XiJH3NOZKAGdUAjaAKCB5SNqfM5oBwwJxVgWsMkdZxDlkRFKBAVoeDyYYweCDCLhBqphQKFFK2BNFKYbxF9d8wTJIk4ScS2RwjMwDvUAtVBY432W-lHWG1hTSJWjRjme2B2fkvytCRPs3huei6Kh54aKybYg1bK21buSev2zduQYaHcWdHfetgtD2-a9WmmAHVn3AK5m0_Vr0_BR9IhLG8twn9HfVzKY4tKYdI-xLf-IZqQn90jd7sHyXRyKV2BBalK4db3i7IvocfoVOIsGrtoriCJpI__ON8_1U5m4bi8cJYuCabvgSPMT1qlL4K_lTgC8yY4_4xV1LMOZVOzxDX0Ko4v9jAJGUUKAAA",
    "category": "Scary",
    "tonic": 3,
    "scale": "minor"
  },
  "P04 (C minor)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE32QUQ4DIQhELzQhDoi6ZzHe_xrN6qYptnY-4U0gr_eudSAJLYUY0kDvbIelsITUSfuJtpg86XSiPY54095QbEAl7lJGll_4heIDLrzax2FH2Wi96ZMD7ufW4wcp1GjlrxPqJmXRByfUTcp8JBNvLfUKpw3cvayK4lGjYrEC1q_GeAFxpmkHIQIAAA",
    "category": "Scary",
    "tonic": 0,
    "scale": "minor"
  },
  "P05 (D minor)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE5VWWbKDMAy7kCcTL1k4C8P9r_EmgfYlxg6UT2rFjmSp7PuO5YAYKMXpyRAP2HfcnB-DeoWtmqJdjWF-E6lXk1etXkmvFrua9NlndfKqrbOxgHc8B-OeuIHXgFWDixcgh2WxzicCcogX83wBRrs-mecnYIf8ZJ3f-XFHysEQt1PkTpVdltzBitWlEwXsaFdUF_pyBZxtSDW7NLqAHQWr1eXDmNtoW5Hm9trMG128ATsCYVxxB-KIhHHFHwg7MFxxCOKIhdr2_85scwqCCEhtYN6mSgTUISATmyPWaKwzoYNHDPKM4YbJ41NeQSqPT560W9-PHwQcsfNgDbtUcYnV6SSzlMuZdVKdG87QrpxAYsd6G6tj69RkwBgEp4B3TZ4gfNcEExA2WUbw_X46KVPHZiAGqh2bOpYUrwUwm-ta-7p6f6E6MuU5MlFn5onBNh977i0_2FCvS31twzuddXW_JwvrNH1j4c1alyeIsS6ODfX9dHTLextS_MGGd-zctzg2xIDbFFDNBaaelz2cDyw0-122cDC08sNDVJAd30vfkxnfT5BlfH_tbmmg47v3-_hQYdXekI5vOY4_ao-Hw7ULAAA",
    "category": "Scary",
    "tonic": 2,
    "scale": "minor"
  },
  "P06 (A minor)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE32Tba6FIAxEN9QYho8iayHufxsvyn0Rh1H-QaYztfb03nM6LGxoe7ZwWO-l3Pct5ubn4yzaSgj7oqwlZFKCRFB2UHa47MJ9IlVFKojKOirrqDpNJErKLl12U1N5qfq3RrSYbdS2VN1YmlVAVv3mqV_zaH7rC0mLMi3KtKghOIlc2bmyc_pdoKJK-no6l3Yf1quQqkJitgRLPs-aC3f1HfsUQWPdHxNP5rdVI-umrJvqvklAGDhI4iCRg2ZugU5Tp7HD-waDkYNkDhI6zNTRuPGDj0aNweCyVObFvM6yJ5VLm-mMTu_LBmYTA873dcYA9SPzgvYrk9HFYPcjc3D8kXkx_cg8_gAZI2CI3gUAAA",
    "category": "Scary",
    "tonic": 9,
    "scale": "minor"
  },
  "P07 (F minor)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE5WT2W3EMAwFG3oQxEtHLYL7byMQHWQtWl44_NZ4yEd6jEEGrjCCKYocyIl6k2shHxiDKrjDMkxQeP8usfal1MkGydBT0h_IAHYHvTUtDrYDEr9fkFPVO8gZwlB1aZlGLpGUtDN2CE2jdjfuQE1L7yIOFnC7zMjxETSVtT4Tfg2fcmi0vdwGUYirvTVS2MY_jOs22sv1E21nDOvPSUsEeTfjff13I--MzBCFikttD8YjPEGBGDRPqT2EI7tU2SAV0h2keeJFlyuxCW5SPY1SXfqQ6mWmaWA3bB-Gmfw2f1P8m4kS96U1nWD4O47jB3OJlC5TBAAA",
    "category": "Scary",
    "tonic": 5,
    "scale": "minor"
  },
  "P08 (C minor)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE4VUba6EMAi8EDHlq8BZTO9_jZd29ylbq_qHSBkKzJR931lBDBShcoOyEbNG-gxKg33XcYgk_jXdSQYcoNJAtxCjcn7aU0nUga0JyyYynA5Wkl9LGTk1krNSx_bg5DQtcol003w9JlStApgA478bzn3OgI2ZckEf51FljqzV6BLpzKn061QTYnF4zu4OPg1sFXEM6n_UFtWBB3MBgk-k20S6DZMJHmkKMN0JwHoTOe2kBbvRgq20YCst2GhxZj2D3BRTBTpxNxPsw8xBKyn4Sgq-koK_SiGeaIxXKUSaFxi2Lm43gjgEQAysT2yjTHSjdGsTeahANuj-vMIe1qubGTg5RrkhGWVUfSLz2L4BC8ZR-sX54V5hv6tgVIQGFPDNEy6AOj9YPainCuwN5Kpo1GW7nrOs1oYue_2BrXaIvioHP6c30sH6qh2sr3sE680iQWvtD0UKVXNABgAA",
    "category": "Scary",
    "tonic": 0,
    "scale": "minor"
  },
  "P10 (F minor)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE33Pyw3EQAgD0IbQCgwYqCWa_ttYTXLM52qeLHMch7kgl9hPVVGpCoyxs0WXfJ3v0elTUC9-ZtpIpnl38eQU9CP3HekYWeGatKv-1ceOnCSnAER9r4-9ZrTdkZzwi7-2c0fW7h5NM3h-P8tdX4iZKm23ODkE8ch7rT9Nna0hiwEAAA",
    "category": "Scary",
    "tonic": 5,
    "scale": "minor"
  },
  "P11 (B minor)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE42TUW4DMQhEL4RWwMAAZ7H2_teonKRqN4mU-MvCb4DB9lrLXDxO0SPYdIclopGip6xlIc53h0eqWpalIjRmQ2uVWIjN5gflEYRyWGKHqsICqmydTnskv8MA2J5JmLtmpNgxMz3pgCmBng8C37Gsqp6wzghsAUzQsvcvDnw70HQ0ItgwfKxAMp1TFZW2sbVMxUrcBSEoCZ5iR1e6O30YozAItn3XSaC6sMf9J71VG6p1Z2to5_iWpCpIdphXG_GscWbUQDvRqTYSx8WQzhcKAFFQ9_To_qYGWZaZ1Y3Sx7VQHOItMAk9XxuR3BHTKLIHfJjZsvezzh27jQqu2eyPPMkC08zpEX7hn26eu5mwUVZWMK7JX-BUzaJbjaXF_eH-wtdXXjvxv3Xt4sr204-o8_wBrOz51owDAAA",
    "category": "Scary",
    "tonic": 11,
    "scale": "minor"
  },
  "P12 (A minor)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE42TW4pjQQxDN2SCLfm5lpD9b2Nw3R5oZm5IfgsfJEuu5_NpJVCBC-Yl-qhJkN02GoCH6Eu-GHrMzNRUlI9XV3xD2aFiwnx64oIIYYr7Ejblk6qwJTQoOAgHBW9nYpGjIMx7hOeNgfLoiUYdZoQQt2Wg8IlR7UGOewgfnLQ2hHEs65LRI4N3MjGdVRbAOkv_1xqUa6FibSRmZWrKQcNop8eVmssGZ4K8TY0nAhvFJm73THmzI1OhQ_FFerq6vDjsL5g4THW4T3bhWieFlOXvIsiDRFPhybArtRUQ8h6pfWM41SO7duzqhm-7qdONKtpY2rDPxmq7iW0UWGN5Dm3nxeO-mtrgdWDbZRevo6FQhXHbS53t2Roz0fw432feqq08qP1ZYR43n4xx1qj7ze38zKoi4Y6_V5lysDeM7SOKpIdX9-lxbbX4uf7_SzHbVtSGZvSZnx_za5tbna3FAgast7PPb2-3OjWFNOtR94pTZYuFQF-CdQE1H_Zktx-VTSBKe4bl3q_XH7K5AU73BAAA",
    "category": "Scary",
    "tonic": 9,
    "scale": "minor"
  },
  "P13 (C minor)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE32SS46lQAwEL1Qqpe307yyI-19jZLoXqAdYv1C-qMDHcVgvxgo5F7d308Vg4g7EwrmOw-tc2NaBhhs7m2q1sB1wIWHaKiUX2y9sd5eWm6p5W_OC4xGWGTZqm7uWKPhhoRtAeZpVKQziF8wX2AFJYWQGEbCB5-kPsM1ylFcKPJTIDw3bDlFAk8aiSnzU4Cz_V-45BmcYWoXwoo3rq4RvQJym6Mpw6kcKnxT3bsOqnkt3MAJsK00JkMt3-r3atSt-3YzOdDMrLbtTnStGw1KSKqKs30_y7BzzvqoQOsEI_eiWM3yP_NEtZ_ev84tDbUBVG4U2zfrqVrN7a3xdkPmiLuYa_YciPX8AzxCTqJzMr4_s7VBPhQTnp68TFUyRW72fIvkGO5SAs6Kjfs_j2UJklFvYLl0NvTTc32D_E_D8B6_BeIBZBAAA",
    "category": "Scary",
    "tonic": 0,
    "scale": "minor"
  },
  "P14 (F minor)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE52T262EMAxEG7Ii2-NnLYj-27gCJHRBZFntb-xJjmfiZVmUCboSD-lMzkSgOsoKxCstiyrBJvWh1lqIyFDJDN8FIPhMYF0eCbga3LH3OyFn_emcEoAiS3W7d1k0Cf0skL1eZDyp34lzE4DJJhbInXh_AUo28URGWpYLs1Y4tOM0kSzIhbw2pUZYephFtxgb6ekdWZIreT_3jdMNa08-dPMQa3SnwCLZKoXzJdQeamFSQAlXFV4y7XFgMHuCI14i7ZF2sfQl0R7dptEw7jQVvCXMT_yfEuaHAT4FzLcJ8hKw9Sxg4cdRzsSf4xYZuB6eBm9vhcxUEVItIsd3lC9_ochPkPoTpN4gr4w6ZdSfGPETI0Z4s3pWdnhIXSEnu6yjqxwVJW1l-hWhboT_N_tY7RdC3QhDgs3LXFP3jSoSJ2XyoABFrYSt80qV6_oH6rd6pQEGAAA",
    "category": "Scary",
    "tonic": 5,
    "scale": "minor"
  },
  "T01 (E♭ minor)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE4WQUQ4EIQhDL9RMVBDkLMT7X2MzumucyGT7S_tS6u45d6TLSGlTQepw54Ka4vNVb0Oh8JofYbJquwR5pqmCE9hCRhmOBtaYUSYjNyzTwaDBULDEDPr2SFimg8F_evDq8f7LdIyh1WSXQsZWr1HZhz7C-ih3hPW3cxhuvX8AXoIf0QACAAA",
    "category": "Sad",
    "tonic": 3,
    "scale": "minor"
  },
  "T02 (E♭ minor)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE32Q2w1DIQxDF7IQIQ6PWRD7r1FRUpWqcPNr58RO710qjAMxNC26TUIc6D3Z1LRZ2ycjBpuyRtDAdgTI26FngDignOX0pVu8WBYhRbC46S-CLswZoB7hWoBPCenbFSR4MS1LAi9vNO9g4MdUWt6nID91yJ4igQJyQIK0irKKnXfK_nrm-nMP1QPNt8gZUION8QIxG3tlPAIAAA",
    "category": "Sad",
    "tonic": 3,
    "scale": "minor"
  },
  "T03 (A♭ minor)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE32R0Q0DIAhEF7oYFVCYxbj_Go1oE5uq_D7uOKC1lgnCHTFUK3tVxI7WKA5GJrZXQQziWM84TS24QmS0cNEfe6RpkNV7PIFRpa0ysrvIeUReCSK4QPLRgEZHumSklYA8QeygkEzBr7V5Db1kWokuMExcz7i8tOU9t85FLnBqk4Lt-Gh19cVav2c-Y3PIYH_A35ctSO8fK9Hac2YCAAA",
    "category": "Sad",
    "tonic": 8,
    "scale": "minor"
  },
  "T04 (C minor)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE5WRyw3EIAxEGxohgz_gWhD9t7GCKAlovYc9vJOfR4bpvWdFqdA8QKm66YaBBnpnAgvYIRZK-ZBUQqlMqZRfY15jvzN4IKfsjTYgm9PCFE1E5C_rsutqdqMdgyYlkocVfn2EJHWXDYVFyfPNCvbwlvr3Rjs2pr66CV3_cu8C4oro9McHItSC9_kBAAA",
    "category": "Sad",
    "tonic": 0,
    "scale": "minor"
  },
  "T05 (D minor)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE1WP2Q0FIQwDG4pWOGQ5akH038ZTvC8cn7YcZhhjoE5JT-0qacoYWSPCo_aI6tEQMXNcxFo0xr2JrZPXG1R5MSWzKTei3oh2I3og1gApGG1V1ETl6oOAqtnWhK4bA5puDujpoCxWVktXZ-HEUdlxiUQ8rRYBzQ8i1bXH7bdS2m-uUn1z_yva63pLae_E89tqc_4AABMgzL0BAAA",
    "category": "Sad",
    "tonic": 2,
    "scale": "minor"
  },
  "T06 (D minor)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE4WSUY7EMAhDLxRVAQyGs1S9_zVWZDTadtV28xv7OTjs-641kMPjGHNjBUiF-aRp-pjH2Hdbd1ZemZExjQ5JjLn5nJbOaRoeKtpqyAAG8hiySTHDSdcwj3ZUVVJgqgDL5I0vzVenmLtMCBZf60ldVYRmAFmeYUvNgRju9x7tBNH0IN11EsvjL41ox4RAK2gwlq8R9D7AOuB88F9F1nykU7NYQn3lY8O10KVuz53at3kp9CPG9zH3Flxa5bJol4o6buYb0SHnTt8-LRr_22auWXGvZYNPZ-3OE5gNPtW4luGZ_GctP53zXp2NNqeEqFrFGhDyJL5uJY_jB2f9l5Z0AwAA",
    "category": "Sad",
    "tonic": 2,
    "scale": "minor"
  },
  "T08 (D minor)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE32T2ZEEMQhDE3J1cQgBsUxN_mls0b3nrKf9a8l-IHg8HprPJYcxjCwogWxgyXM9Htb7u8PdNcojTCK6fcRub8QkXZkqUNUunmJuxXqIiCY6Sy3TcT28gIV64_C_J8YCXfCFd5-QRCurwqvdvi03v3Q3QwSeQLjpVcRYwrcWO9ytpLyrQ9T1rNt6oVbswWzAfp0ch-aPI38zaPuy4SoLMa00Y-RNbD5EXe6Zklk8y54Wb7UkFZpuVo5Pbf7U-w_FB8VFpBLVQtwNBQYFUYCxQZ45Q99oXwbo1GKBK2KLgkFBhjCozMvh-zmPIaE7TMrM-66BcZCRrZkUy_7U4qYpcfRX_OYefbVxXydfBsZu4uGQNJkBjcir1ZyZD9uCcFqiFirtVPebt3M4ztAR5LXbE-ZWSgagpZ1pYfW9SW-zydcxOR2yfb5epuSuIzUoZ9rZIsYTe3bna6f_kdRkkxkarhJFez4_AKQNc8MPBQAA",
    "category": "Sad",
    "tonic": 2,
    "scale": "minor"
  },
  "T09 (D minor)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE31SWa6EMAy7UIWyOctZEPe_xlM6aB4gOv1tbMeO933nGNBj0KaFyvR00oBx2qBj7LvUgC_-NxBpIkjF4cLSAJUfgKrKYFMRsyjlCfABvAO4FQTBCjAZ21QwPlcujQgVcotKxuDmD5N0syyka49D3smlyVkSHgEIhfV054GjlasEphTEFVUY0uzOJuWhplH45PPOrs1-fZNdF7toc1siJCuKQya3LnK0ze454mcs2OiW4pyed19eyhtyzeZbheG0gtg1nvx2YYmIFrm8_zYM5Apit5zmgafx08rTezwrN81DlpXLVlAEO4to-XQ-S3Eu9ez8yEfr4jj-ANt9OFRYAwAA",
    "category": "Sad",
    "tonic": 2,
    "scale": "minor"
  },
  "T10 (F minor)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE33O6w3DMAgE4IVQhHmWWZD3X6Ny7KiuRMzf03dHZpKCRAe8PGw_B-yQyTQyDo39DPDSEQvWcZt2VYt9_rqhTc0B2sptOm3T0g5KpeaT5qkJ37bljr3WsrZt6WDn7Qhm-YvWn64_t5O25_M69t6_OtzeodABAAA",
    "category": "Sad",
    "tonic": 5,
    "scale": "minor"
  },
  "T11 (B minor)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE1WQWw5EIQhDN9QYAUFYi3H_25jg62b880hryxiDDSIQn5BC0Q11YowmUJ6oRcJAixC0PlJ0sYqml3EScTR6ZE8l88vk6uyRPcUMDiz9MqXiXRntOkgijeD6HYZtaXr1MEfPOwWyVXsmfip9n8ap9MWPE4PAnhvJjJKPId1Aayt_7agWnfMHriBTikIBAAA",
    "category": "Sad",
    "tonic": 11,
    "scale": "minor"
  },
  "T12 (A minor)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE12P0Q3FMAgDF7KqQCA0syD2X-OpRKTN-zzLgrO7EwfaZZPRAu6dCilxFnLiKOxnWR5kK9REKRxn2c7L93l5_mmkFhtUd5RqLNARkEun4Fnh3vcWWn77B6Xg-4TS8NNPRTbIvaPUZIFYoIOW5uu1PHedW8QPu5uR4U8BAAA",
    "category": "Sad",
    "tonic": 9,
    "scale": "minor"
  },
  "T13 (C minor)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE3WP2w3EIAwEG1oh_MDGtSD6b-OUhBAicv4cz1re1pow1DsoUbghd7QmBRIdOUkYciobo0mgNuEiQvXAHlbBW5yHSWeaUong_AxDzrUvERmRlel2WJ8XHIXmCxdViN9mGearvG0H7aO8f5X3P-XrFq-XyT40tVoRvf8A96drGIsBAAA",
    "category": "Sad",
    "tonic": 0,
    "scale": "minor"
  },
  "T14 (F minor)": {
    "compressedNotes": "sn1:H4sIAAAAAAAAE32SyY3EMAwEExIMHs2jYzEm_zQWsjzYw5r9SmShWeR5niavIYczKAxJZ4cXYshrnKfVCH74P0B2R0EgpvSK2eExomcHvfzHb84nskrR0gLvVR-5x-vEZ5SZmmS0XnDecGQnrUtMVJg9dMIDxtSUrjuL7dk22fjRvpJcg5rDkfBQkUBj2FH4FRuXmLjFFDO1qEEBPThsJnEFYFDXtP-S-ExiItrWGj5lnCdkgFuFPtnSQXPTihVb92gcYLM001NZ8CtHjbBtbBx_trmWuWfHZBe-p7yK8amY7LTuRlu6LX91b_JZnxMeirQw69B-bz63TnLiIeIZ6VJ6-Z5qduyabOtUSXGj5FtKbq-qJltLe13ECr4n9yRLVHS2l_HSvUZ8nFQfhUdkk9vIYzV9kEW4W5kTfYX-lIMHWD1Hq4TmkhdjXclDHif6122_vgCS-ybgEwQAAA",
    "category": "Sad",
    "tonic": 5,
    "scale": "minor"
  }
} as const;
