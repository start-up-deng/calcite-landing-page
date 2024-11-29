import { HStack, Text } from '@chakra-ui/react'

export default {
  title: 'あらゆる段階に対応した価格設定',
  description:
    '一度の支払いで、私たちの高品質なデータベースソリューションに生涯アクセス。',
  plans: [
    {
      id: 'basic',
      title: 'ベーシック',
      description: '基本機能を備えたプラン、初めての方に最適。',
      price: '無料',
      features: [
        {
          title: '基本的なデータ統合',
        },
        {
          title: 'シームレスなクエリ実行',
        },
        {
          title: 'ユーザーフレンドリーなインターフェース',
        },
        {
          title: '基本的なセキュリティ機能',
        },
        {
          title: 'コミュニティサポート',
        },
        {
          title: 'そしてもっと...',
        },
      ],
      action: {
        href: '#',
      },
    },
    {
      id: 'pro',
      title: 'プロフェッショナル',
      description: '中小企業向けの完全なデータソリューション。',
      price: '¥10,000/月',
      isRecommended: true,
      features: [
        {
          title: '複数のデータベースサポート',
        },
        {
          title: '高度なセキュリティ機能',
        },
        {
          title: 'カスタマイズ可能なクエリ',
        },
        {
          title: '優先サポート',
        },
        {
          title: '1年間のアップデート',
        },
        null,
        {
          title: 'プライベートベータアクセス',
          iconColor: 'green.500',
        },
      ],
      action: {
        href: '#',
      },
    },
    {
      id: 'enterprise',
      title: 'エンタープライズ',
      description: '成長するチームのための無制限ライセンス。',
      price: (
        <HStack>
          <Text textDecoration="line-through" fontSize="sm" color="gray.400">
            ¥300,000
          </Text>
          <Text>¥150,000</Text>
        </HStack>
      ),
      features: [
        {
          title: '無制限のプロジェクト',
        },
        {
          title: '無制限のユーザー',
        },
        {
          title: '1年間のアップデート',
        },
        {
          title: 'プロフェッショナルプランの全機能',
        },
        null,
        {
          title: 'プライベートベータアクセス',
          iconColor: 'green.500',
        },
      ],
      action: {
        href: '#',
      },
    },
  ],
}