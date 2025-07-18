// MajorCredits interface
export interface MajorCredits {
  credits: number;
  __brand: "major";
}

// MinorCredits interface
export interface MinorCredits {
  credits: number;
  __brand: "minor";
}

// sumMajorCredits function
export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: "major",
  };
}

// sumMinorCredits function
export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: "minor",
  };
}
