import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useCreateArticle } from '@/functions/hooks/articles/create-articles-hooks'
import { Turnstile } from 'next-turnstile'

export function CreateArticleDialog() {
  const { formik, setToken } = useCreateArticle()
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>作成</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>作成</DialogTitle>
        </DialogHeader>
        <form onSubmit={formik.handleSubmit}>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="description">説明</Label>
              <Input
                type="text"
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
              />
              {formik.errors.description && (
                <p className="text-red-500">{formik.errors.description}</p>
              )}
            </div>
            <div className="grid gap-3">
              <Label htmlFor="slug">スラッグ</Label>
              <Input
                type="text"
                name="slug"
                value={formik.values.slug}
                onChange={formik.handleChange}
              />
              {formik.errors.slug && (
                <p className="text-red-500">{formik.errors.slug}</p>
              )}
            </div>
            <div className="grid gap-3">
              <Label htmlFor="thumbnailUrl">サムネイルURL</Label>
              <Input
                type="url"
                name="thumbnailUrl"
                value={formik.values.thumbnailUrl}
                onChange={formik.handleChange}
              />
              {formik.errors.thumbnailUrl && (
                <p className="text-red-500">{formik.errors.thumbnailUrl}</p>
              )}
            </div>
            <div className="grid gap-3">
              <Turnstile
                siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY as string}
                theme="auto"
                onVerify={token => {
                  setToken(token)
                }}
              />
            </div>
          </div>
          <Button type="submit">作成</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
