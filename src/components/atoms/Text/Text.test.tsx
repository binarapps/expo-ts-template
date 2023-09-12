import { Text } from '.'

import { theme } from '~constants'
import { cleanup, render } from '~utils/testUtils'

afterEach(cleanup)

describe('Text', () => {
  it('renders correctly text', () => {
    const { getByText } = render(<Text>Hello World</Text>)
    expect(getByText('Hello World')).toBeDefined()
  })

  it('renders correctly with underline', () => {
    const { getByText } = render(<Text underline>Hello World</Text>)

    expect(getByText('Hello World').props.style).toStrictEqual({
      textDecorationLine: 'underline',
      textTransform: 'none',
    })
  })

  it('renders correctly with bold text', () => {
    const { getByText } = render(<Text bold>Hello World</Text>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      fontWeight: 'bold',
      textTransform: 'none',
    })
  })

  it('renders correctly with italic text', () => {
    const { getByText } = render(<Text italic>Hello World</Text>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      fontStyle: 'italic',
      textTransform: 'none',
    })
  })

  it('renders correctly with capitalized text', () => {
    const { getByText } = render(<Text capitalize>Hello World</Text>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      textTransform: 'capitalize',
    })
  })

  it('renders correctly with uppercase text', () => {
    const { getByText } = render(<Text uppercase>Hello World</Text>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      textTransform: 'uppercase',
    })
  })

  it('renders correctly with lowercase text', () => {
    const { getByText } = render(<Text lowercase>Hello World</Text>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      textTransform: 'lowercase',
    })
  })

  it('renders correctly with a custom font size', () => {
    const { getByText } = render(<Text fontSize={20}>Hello World</Text>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      fontSize: 20,
      textTransform: 'none',
    })
  })

  it('renders correctly with a custom color', () => {
    const { getByText } = render(<Text color="red.400">Hello World</Text>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      color: theme.colors.red[400],
      textTransform: 'none',
    })
  })

  it('renders correctly with a custom text alignment', () => {
    const { getByText } = render(<Text textAlign="center">Hello World</Text>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      textAlign: 'center',
      textTransform: 'none',
    })
  })

  it('renders correctly with a custom text decoration', () => {
    const { getByText } = render(<Text textDecoration="line-through">Hello World</Text>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      textDecorationLine: 'line-through',
      textTransform: 'none',
    })
  })

  it('renders correctly with a custom font weight', () => {
    const { getByText } = render(<Text fontWeight="bold">Hello World</Text>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      fontWeight: 'bold',
      textTransform: 'none',
    })
  })

  it('renders correctly with multiple styles', () => {
    const { getByText } = render(
      <Text bold italic color="red.400" textDecoration="underline">
        Hello World
      </Text>
    )
    expect(getByText('Hello World').props.style).toStrictEqual({
      fontWeight: 'bold',
      fontStyle: 'italic',
      color: theme.colors.red[400],
      textDecorationLine: 'underline',
      textTransform: 'none',
    })
  })

  it('renders correctly with variant H1', () => {
    const { getByText } = render(<Text variant="H1">Hello World</Text>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      fontSize: 48,
      fontWeight: 'normal',
      textTransform: 'none',
    })
  })

  it('renders correctly compound Text.H1', () => {
    const { getByText } = render(<Text.H1>Hello World</Text.H1>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      fontSize: 48,
      fontWeight: 'normal',
      textTransform: 'none',
    })
  })

  it('renders correctly with variant H1Regular', () => {
    const { getByText } = render(<Text variant="H1Regular">Hello World</Text>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      fontSize: 48,
      fontWeight: 'normal',
      textTransform: 'none',
    })
  })

  it('renders correctly compound Text.H1Regular', () => {
    const { getByText } = render(<Text.H1Regular>Hello World</Text.H1Regular>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      fontSize: 48,
      fontWeight: 'normal',
      textTransform: 'none',
    })
  })

  it('renders correctly with variant H1Bold', () => {
    const { getByText } = render(<Text variant="H1Bold">Hello World</Text>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      fontSize: 48,
      fontWeight: 'bold',
      textTransform: 'none',
    })
  })

  it('renders correctly compound Text.H1Bold', () => {
    const { getByText } = render(<Text.H1Bold>Hello World</Text.H1Bold>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      fontSize: 48,
      fontWeight: 'bold',
      textTransform: 'none',
    })
  })

  it('renders correctly with variant H2', () => {
    const { getByText } = render(<Text variant="H2">Hello World</Text>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      fontSize: 36,
      fontWeight: 'normal',
      textTransform: 'none',
    })
  })

  it('renders correctly compound Text.H2', () => {
    const { getByText } = render(<Text.H2>Hello World</Text.H2>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      fontSize: 36,
      fontWeight: 'normal',
      textTransform: 'none',
    })
  })

  it('renders correctly with variant H2Regular', () => {
    const { getByText } = render(<Text variant="H2Regular">Hello World</Text>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      fontSize: 36,
      fontWeight: 'normal',
      textTransform: 'none',
    })
  })

  it('renders correctly compound Text.H2Regular', () => {
    const { getByText } = render(<Text.H2Regular>Hello World</Text.H2Regular>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      fontSize: 36,
      fontWeight: 'normal',
      textTransform: 'none',
    })
  })

  it('renders correctly with variant H2Bold', () => {
    const { getByText } = render(<Text variant="H2Bold">Hello World</Text>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      fontSize: 36,
      fontWeight: 'bold',
      textTransform: 'none',
    })
  })

  it('renders correctly compound Text.H2Bold', () => {
    const { getByText } = render(<Text.H2Bold>Hello World</Text.H2Bold>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      fontSize: 36,
      fontWeight: 'bold',
      textTransform: 'none',
    })
  })

  it('renders correctly with variant H3', () => {
    const { getByText } = render(<Text variant="H3">Hello World</Text>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      fontSize: 30,
      fontWeight: 'normal',
      textTransform: 'none',
    })
  })

  it('renders correctly compound Text.H3', () => {
    const { getByText } = render(<Text.H3>Hello World</Text.H3>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      fontSize: 30,
      fontWeight: 'normal',
      textTransform: 'none',
    })
  })

  it('renders correctly with variant H3Regular', () => {
    const { getByText } = render(<Text variant="H3Regular">Hello World</Text>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      fontSize: 30,
      fontWeight: 'normal',
      textTransform: 'none',
    })
  })

  it('renders correctly compound Text.H3Regular', () => {
    const { getByText } = render(<Text.H3Regular>Hello World</Text.H3Regular>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      fontSize: 30,
      fontWeight: 'normal',
      textTransform: 'none',
    })
  })

  it('renders correctly with variant H3Bold', () => {
    const { getByText } = render(<Text variant="H3Bold">Hello World</Text>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      fontSize: 30,
      fontWeight: 'bold',
      textTransform: 'none',
    })
  })

  it('renders correctly compound Text.H3Bold', () => {
    const { getByText } = render(<Text.H3Bold>Hello World</Text.H3Bold>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      fontSize: 30,
      fontWeight: 'bold',
      textTransform: 'none',
    })
  })

  it('renders correctly with variant H4', () => {
    const { getByText } = render(<Text variant="H4">Hello World</Text>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      fontSize: 24,
      fontWeight: 'normal',
      textTransform: 'none',
    })
  })

  it('renders correctly compound Text.H4', () => {
    const { getByText } = render(<Text.H4>Hello World</Text.H4>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      fontSize: 24,
      fontWeight: 'normal',
      textTransform: 'none',
    })
  })

  it('renders correctly with variant H4Regular', () => {
    const { getByText } = render(<Text variant="H4Regular">Hello World</Text>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      fontSize: 24,
      fontWeight: 'normal',
      textTransform: 'none',
    })
  })

  it('renders correctly compound Text.H4Regular', () => {
    const { getByText } = render(<Text.H4Regular>Hello World</Text.H4Regular>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      fontSize: 24,
      fontWeight: 'normal',
      textTransform: 'none',
    })
  })

  it('renders correctly with variant H4Bold', () => {
    const { getByText } = render(<Text variant="H4Bold">Hello World</Text>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      fontSize: 24,
      fontWeight: 'bold',
      textTransform: 'none',
    })
  })

  it('renders correctly compound Text.H4Bold', () => {
    const { getByText } = render(<Text.H4Bold>Hello World</Text.H4Bold>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      fontSize: 24,
      fontWeight: 'bold',
      textTransform: 'none',
    })
  })

  it('renders correctly with variant H5', () => {
    const { getByText } = render(<Text variant="H5">Hello World</Text>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      fontSize: 20,
      fontWeight: 'normal',
      textTransform: 'none',
    })
  })

  it('renders correctly compound Text.H5', () => {
    const { getByText } = render(<Text.H5>Hello World</Text.H5>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      fontSize: 20,
      fontWeight: 'normal',
      textTransform: 'none',
    })
  })

  it('renders correctly with variant H5Regular', () => {
    const { getByText } = render(<Text variant="H5Regular">Hello World</Text>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      fontSize: 20,
      fontWeight: 'normal',
      textTransform: 'none',
    })
  })

  it('renders correctly compound Text.H5Regular', () => {
    const { getByText } = render(<Text.H5Regular>Hello World</Text.H5Regular>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      fontSize: 20,
      fontWeight: 'normal',
      textTransform: 'none',
    })
  })

  it('renders correctly with variant H5Bold', () => {
    const { getByText } = render(<Text variant="H5Bold">Hello World</Text>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      fontSize: 20,
      fontWeight: 'bold',
      textTransform: 'none',
    })
  })

  it('renders correctly compound Text.H5Bold', () => {
    const { getByText } = render(<Text.H5Bold>Hello World</Text.H5Bold>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      fontSize: 20,
      fontWeight: 'bold',
      textTransform: 'none',
    })
  })

  it('renders correctly with variant H6', () => {
    const { getByText } = render(<Text variant="H6">Hello World</Text>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      fontSize: 18,
      fontWeight: 'normal',
      textTransform: 'none',
    })
  })

  it('renders correctly compound Text.H6', () => {
    const { getByText } = render(<Text.H6>Hello World</Text.H6>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      fontSize: 18,
      fontWeight: 'normal',
      textTransform: 'none',
    })
  })

  it('renders correctly with variant H6Regular', () => {
    const { getByText } = render(<Text variant="H6Regular">Hello World</Text>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      fontSize: 18,
      fontWeight: 'normal',
      textTransform: 'none',
    })
  })

  it('renders correctly compound Text.H6Regular', () => {
    const { getByText } = render(<Text.H6Regular>Hello World</Text.H6Regular>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      fontSize: 18,
      fontWeight: 'normal',
      textTransform: 'none',
    })
  })

  it('renders correctly with variant H6Bold', () => {
    const { getByText } = render(<Text variant="H6Bold">Hello World</Text>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      fontSize: 18,
      fontWeight: 'bold',
      textTransform: 'none',
    })
  })

  it('renders correctly compound Text.H6Bold', () => {
    const { getByText } = render(<Text.H6Bold>Hello World</Text.H6Bold>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      fontSize: 18,
      fontWeight: 'bold',
      textTransform: 'none',
    })
  })
})
