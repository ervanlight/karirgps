import type { KonteksPersonal } from '@/types'

export type AnxietyType =
  | 'LOST_DIRECTION'
  | 'FINANCIAL_PRESSURE'
  | 'FAMILY_EXPECTATION'
  | 'ACADEMIC_INSECURITY'
  | 'LATE_DECISION'
  | 'WRONG_MAJOR'
  | 'LOCATION_CONSTRAINT'
  | 'SMK_JALUR_GANDA'
  | 'SMK_SKILL_VS_GELAR'
  | 'GENERAL_ANXIETY';

export interface AnxietyContext {
  primaryAnxiety: AnxietyType;
  secondaryAnxiety?: AnxietyType;
  contextDescription: string;
}

export function getAnxietyContext(konteks: KonteksPersonal): AnxietyContext {
  const isLate = konteks.tahap === 'SMA12' || konteks.tahap === 'LULUS';
  const isMaba = konteks.tahap === 'MABA';
  const isLost = konteks.jalur.includes('BELUM_TAHU');
  const financialPressure = konteks.kondisi_biaya === 'PRIORITAS_HEMAT' || konteks.kondisi_biaya === 'LANGSUNG_KERJA';
  const familyExpectation = konteks.tanggungan_keluarga === 'PERTAMA' || konteks.tanggungan_keluarga === 'HARAPAN';
  const academicInsecurity = konteks.kemampuan_akademik === 'PERLU_USAHA' || konteks.kemampuan_akademik === 'RATA';
  const locationConstraint = konteks.mobilitas === 'TETAP' && konteks.domisili !== 'JABODETABEK' && konteks.domisili !== 'JAWA_BESAR';

  const isSmk = konteks.asal_sekolah === 'SMK';
  const inginKerjaLangsung = konteks.jalur.includes('KERJA');
  const inginKuliah = konteks.jalur.some((j) => (['PTN', 'PTS', 'KEDINASAN', 'LN'] as string[]).includes(j));

  let primary: AnxietyType = 'GENERAL_ANXIETY';
  let secondary: AnxietyType | undefined = undefined;
  let desc = '';

  if (isMaba) {
    primary = 'WRONG_MAJOR';
    desc = 'Khawatir salah jurusan di kampus saat ini dan mempertimbangkan pindah atau menyesuaikan diri.';
  } else if (isSmk && inginKerjaLangsung) {
    primary = 'SMK_SKILL_VS_GELAR';
    secondary = financialPressure ? 'FINANCIAL_PRESSURE' : (inginKuliah ? 'LOST_DIRECTION' : undefined);
    desc = 'Sudah punya kompetensi siap kerja dari jurusan SMK, tapi masih menimbang apakah tetap perlu kuliah untuk membuka jenjang karier yang lebih tinggi nanti.';
  } else if (isSmk && inginKuliah) {
    primary = 'SMK_JALUR_GANDA';
    secondary = isLost ? 'LOST_DIRECTION' : undefined;
    desc = `Punya keahlian spesifik dari jurusan SMK${konteks.jurusan_smk ? ` (${konteks.jurusan_smk})` : ''}, tapi mempertimbangkan kuliah di jalur yang belum tentu satu garis lurus dengan keahlian itu.`;
  } else if (isLost && isLate) {
    primary = 'LATE_DECISION';
    secondary = 'LOST_DIRECTION';
    desc = 'Tertekan karena waktu hampir habis (kelas 12/lulus) tapi masih belum tahu mau ke mana.';
  } else if (financialPressure && familyExpectation) {
    primary = 'FINANCIAL_PRESSURE';
    secondary = 'FAMILY_EXPECTATION';
    desc = 'Menanggung harapan besar keluarga tapi terhambat oleh kondisi finansial, mencari jalur hemat/kerja.';
  } else if (familyExpectation && academicInsecurity) {
    primary = 'FAMILY_EXPECTATION';
    secondary = 'ACADEMIC_INSECURITY';
    desc = 'Merasa beban ekspektasi keluarga berat karena merasa kemampuan akademiknya pas-pasan.';
  } else if (financialPressure) {
    primary = 'FINANCIAL_PRESSURE';
    desc = 'Cemas dengan biaya pendidikan, prioritas mencari yang murah atau beasiswa.';
  } else if (academicInsecurity) {
    primary = 'ACADEMIC_INSECURITY';
    desc = 'Kurang percaya diri bersaing secara akademik, butuh jalur masuk yang realistis.';
  } else if (isLost) {
    primary = 'LOST_DIRECTION';
    desc = 'Bingung menentukan arah, butuh kejelasan dan validasi langkah pertama.';
  } else if (locationConstraint) {
    primary = 'LOCATION_CONSTRAINT';
    desc = 'Pilihan kampus/karir terbatas pada daerah domisili, butuh strategi lokal.';
  } else {
    desc = 'Mencari validasi dan kejelasan arah karir yang paling optimal sesuai potensi.';
  }

  return {
    primaryAnxiety: primary,
    secondaryAnxiety: secondary,
    contextDescription: desc
  };
}
