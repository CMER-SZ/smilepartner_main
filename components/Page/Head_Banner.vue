<script lang="ts" setup>
  import { IApp } from '~/utils/app'
  export interface IMenuItem {
  type: 'link' | 'button'
  text: string
  href?: any
  route?: any
}

const { t } = useLang()
const app = useState<IApp>('app')
  </script>
  
  <template>
   

  </template>
  
      