'use client'

import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard,
} from '@chakra-ui/react'
import { Br, Link } from '@saas-ui/react'
import type { Metadata, NextPage } from 'next'
import Image from 'next/image'
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from 'react-icons/fi'

import * as React from 'react'

import { ButtonLink } from '#components/button-link/button-link'
import { Faq } from '#components/faq'
import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from '#components/highlights'
import { ChakraLogo, NextjsLogo } from '#components/logos'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Pricing } from '#components/pricing/pricing'
import { Testimonial, Testimonials } from '#components/testimonials'
import { Em } from '#components/typography'
import faq from '#data/faq'
import pricing from '#data/pricing'
import testimonials from '#data/testimonials'

// export const meta: Metadata = {
//   title: '異種データベース連携ソリューション',
//   description: '異なるデータベース間での連携クエリを可能にするDB製品',
// }

const Home: NextPage = () => {
  return (
    <Box>
      <HeroSection />

      <HighlightsSection />

      <FeaturesSection />

      <TestimonialsSection />

      <PricingSection />

      <FaqSection />
    </Box>
  )
}

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                異種データベース
                <Br /> 連携クエリソリューション
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                私たちのDB製品は、異なるデータベース間での<Em>連携</Em>クエリを可能にします。<Br />
                MySQLとSQL Serverのような異種データベースをシームレスに結合し、効率的なデータ分析を実現します。
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <HStack pt="4" pb="12" spacing="8">
                <NextjsLogo height="28px" width="20px" /> <ChakraLogo height="20px" />
              </HStack>

              {/* <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink colorScheme="primary" size="lg" href="/signup">
                  サインアップ
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="https://demo.saas-ui.dev"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: 'common',
                        transitionDuration: 'normal',
                        '.chakra-button:hover &': {
                          transform: 'translate(5px)',
                        },
                      }}
                    />
                  }
                >
                  デモを見る
                </ButtonLink>
              </ButtonGroup> */}
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: 'none', lg: 'block' }}
            left={{ lg: '60%', xl: '55%' }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/list.png"
                  width={1200}
                  height={762}
                  alt="Screenshot of a ListPage in Saas UI Pro"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: '異種データベース連携',
            icon: FiSmile,
            description: ' MySQL、SQL Server、PostgreSQLなど、さまざまなデータベースをサポート。',
            iconPosition: 'left',
            delay: 0.6,
          },
          {
            title: '高性能クエリ',
            icon: FiSliders,
            description:
              '大量データに対する迅速なクエリ処理。',
            iconPosition: 'left',
            delay: 0.8,
          },
          {
            title: 'ユーザーフレンドリーなインターフェース',
            icon: FiGrid,
            description:
              '直感的な操作で簡単にデータを管理',
            iconPosition: 'left',
            delay: 1,
          },
          {
            title: 'シームレスなデータ統合',
            icon: FiThumbsUp,
            description:
              '異なるデータベースからのデータを一つのクエリで統合し、複雑なデータ分析を簡単に行えます。',
            iconPosition: 'left',
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  )
}

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard('yarn add @saas-ui/react')

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="コアコンポーネント">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            無料で始められる<Em>30以上のオープンソースコンポーネント</Em>。Clerk、Supabase、Magicを使った認証画面を含む。React Hook Formを使った完全な機能のフォーム。React Tableを使ったデータテーブル。
          </Text>

          <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="8"
            pe="2"
            bg="primary.900"
            _dark={{ bg: 'gray.900' }}
          >
            <Box>
              <Text color="yellow.400" display="inline">
                yarn add
              </Text>{' '}
              <Text color="cyan.300" display="inline">
                @saas-ui/react
              </Text>
            </Box>
            <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy install command"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            />
          </Flex>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="堅実な基盤">
        <Text color="muted" fontSize="lg">
          私たちは車輪の再発明を好みませんし、あなたもそうすべきではありません。私たちは最も生産的で確立されたツールを選び、Saas UIをその上に構築しました。
        </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="Renata Alink"
        description="創業者"
        avatar="/static/images/avatar.jpg"
        gradient={['pink.200', 'purple.500']}
      >
        “Saas UIは、私たちが美しいモダンなUIをすぐにセットアップするのを助けてくれました。開発時間を数百時間節約し、特定のユースケースに対するビジネスロジックに集中することができました。”
      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="次のアイデアを2ステップ先に進める"
      >
        <Text color="muted" fontSize="lg">
          私たちはあなたの基本的なフロントエンドのニーズをすべて解決しましたので、あなたの製品をユニークにする機能の構築を始めることができます。
        </Text>
        <Wrap mt="8">
          {[
            '認証',
            'ナビゲーション',
            'CRUD',
            '設定',
            'マルチテナンシー',
            'レイアウト',
            '請求',
            'アクセシビリティテスト',
            'サーバーサイドレンダリング',
            'ドキュメンテーション',
            'オンボーディング',
            'ストーリーブック',
            'テーマ',
            'アップセル',
            '単体テスト',
            '機能フラグ',
            'レスポンシブ',
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  )
}

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={['2xl', null, '4xl']}
          textAlign="left"
          as="p"
        >
          市場初の
          <Br /> 異種データベース連携ソリューション。
        </Heading>
      }
      description={
        <>
          私たちの製品は、異なるデータベース間での連携クエリを可能にします。
          <Br />
          データ分析を次のレベルへと引き上げるための完璧な基盤です。
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: '異種データベース連携',
          icon: FiBox,
          description:
            'MySQL、SQL Server、PostgreSQLなど、さまざまなデータベースをシームレスに統合。',
          variant: 'inline',
        },
        {
          title: '高性能クエリ',
          icon: FiLock,
          description:
            '大量データに対する迅速なクエリ処理で、ビジネスインテリジェンスを強化。',
          variant: 'inline',
        },
        {
          title: 'ユーザーフレンドリー',
          icon: FiSearch,
          description:
            '直感的なインターフェースで、専門知識がなくても簡単に操作可能。',
          variant: 'inline',
        },
        {
          title: 'セキュリティ',
          icon: FiUserPlus,
          description:
            'データの暗号化、アクセス制御、監査ログなどの高度なセキュリティ機能を提供。',
          variant: 'inline',
        },
        {
          title: 'スケーラビリティ',
          icon: FiFlag,
          description:
            '企業の成長に合わせてスケールアップ可能な設計。',
          variant: 'inline',
        },
        {
          title: 'データ統合',
          icon: FiTrendingUp,
          description:
            '異なるシステム間でのデータ統合を容易にし、包括的な分析を実施。',
          variant: 'inline',
        },
        {
          title: 'カスタマイズ可能',
          icon: FiToggleLeft,
          description:
            'お客様のニーズに合わせて柔軟にカスタマイズ可能。',
          variant: 'inline',
        },
        {
          title: 'サポート',
          icon: FiTerminal,
          description:
            '導入から運用まで、専門のサポートチームがバックアップ。',
          variant: 'inline',
        },
        {
          title: 'ドキュメンテーション',
          icon: FiCode,
          description: (
            <>
              詳細なドキュメンテーションとベストプラクティスを提供し、迅速な導入をサポート。
            </>
          ),
          variant: 'inline',
        },
      ]}
    />
  )
}

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t)

        return columns
      },
      [[], [], []],
    )
  }, [])

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  )
}

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        お住まいの地域によっては、VATが適用される場合があります。
      </Text>
    </Pricing>
  )
}

const FaqSection = () => {
  return <Faq {...faq} />
}

export default Home