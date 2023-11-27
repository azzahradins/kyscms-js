'use client'

import Tabs from "@/components/Page/Tabs";
import { ReactElement } from "react";
import MangaDetailChapters from "../chapters/page";
import MangaDetailCommunity from "../community/page";
import MangaDetailSettings from "../settings/page";

export const TabDetail = ({
  slug
}: {
  slug: string
}): ReactElement => {
  const baseUrl = `/manga/detail/${slug}`

  return (
    <div className="flex-1">
      <Tabs>
        <Tabs.Item
          key='chapters'
          title='Chapters'
          href={`${baseUrl}/`}
          component={<MangaDetailChapters />} />
        <Tabs.Item
          key='community'
          title='Community'
          href={`${baseUrl}/community`}
          active={true}
          component={<MangaDetailCommunity />} />
        <Tabs.Item
          key='settings'
          title='Settings'
          href={`${baseUrl}/settings`}
          component={<MangaDetailSettings />} />
      </Tabs>
    </div>
  )

}