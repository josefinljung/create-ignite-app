import { deepmerge } from '@mui/utils'

const caseAllCaps = {
  textTransform: 'uppercase',
}

export default function createTypography(palette, typography) {
  const {
    fontFamilyPrimary = '"GT America", sans-serif',
    fontFamilySecondary = '"GT America Extended", sans-serif',
    // The default font size of the Material Specification.
    fontSize = 14, // px
    fontWeightLight = 300,
    fontWeightRegular = 400,
    fontWeightMedium = 500,
    fontWeightSemibold = 600,
    fontWeightBold = 700,
    // Tell Material-UI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize = 16,
    // Apply the CSS properties to all the variants.
    allVariants,
    ...other
  } = typeof typography === 'function' ? typography(palette) : typography

  const coef = fontSize / 14
  const pxToRem = (size) => `${(size / htmlFontSize) * coef}rem`
  const buildVariant = (typeFace, fontWeight, size, lineHeight, letterSpacing, casing) => ({
    fontFamily: typeFace,
    fontWeight,
    fontSize: pxToRem(size),
    // Unitless following http://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight,
    letterSpacing: `${letterSpacing}em`,
    ...casing,
    ...allVariants,
  })

  const variants = {
    h1: buildVariant(fontFamilySecondary, fontWeightBold, 67, 1.085, -0.0373, caseAllCaps),
    h2: buildVariant(fontFamilySecondary, fontWeightBold, 51, 1.185, -0.0355, caseAllCaps),
    h3: buildVariant(fontFamilySecondary, fontWeightBold, 38, 1.275, -0.021, caseAllCaps),
    h4: buildVariant(fontFamilySecondary, fontWeightBold, 28, 1.3, -0.029, caseAllCaps),
    h5: buildVariant(fontFamilySecondary, fontWeightMedium, 28, 1.3, -0.028),
    h6: buildVariant(fontFamilySecondary, fontWeightMedium, 22, 1.1, -0.0225),
    subtitle1: buildVariant(fontFamilyPrimary, fontWeightBold, 16, 1.5, -0.006),
    subtitle2: buildVariant(fontFamilyPrimary, fontWeightBold, 14, 1.5, 0),
    body1: buildVariant(fontFamilyPrimary, fontWeightRegular, 16, 1.5, 0.0125),
    body2: buildVariant(fontFamilyPrimary, fontWeightRegular, 14, 1.5, 0.03),
    button: buildVariant(fontFamilySecondary, fontWeightBold, 12, 1, 0.06, caseAllCaps),
    caption: buildVariant(fontFamilyPrimary, fontWeightRegular, 12, 1, 0.05),
    overline: buildVariant(fontFamilySecondary, fontWeightMedium, 11, 1.5, 0.1125, caseAllCaps),
    // Custom variants
    input: buildVariant(fontFamilyPrimary, fontWeightRegular, 16, 1.5, 0.02), // Should at least be 16px fontSize for iOS Safari not to zoom in on focus.
  }

  const typographyOutput = deepmerge(
    {
      htmlFontSize,
      pxToRem,
      fontFamilyPrimary,
      fontFamilySecondary,
      fontSize,
      fontWeightLight,
      fontWeightRegular,
      fontWeightMedium,
      fontWeightSemibold,
      fontWeightBold,
      // Mui uses standalone `fontFamily` internally.
      fontFamily: fontFamilyPrimary,
      ...variants,
    },
    other,
    {
      clone: false, // No need to clone deep
    },
  )

  return typographyOutput
}
