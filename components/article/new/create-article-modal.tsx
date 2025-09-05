import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCreateArticle } from "@/functions/hooks/articles/create-articles-hooks";

export function CreateArticleDialog() {
  const { formik, setToken } = useCreateArticle();
  return (
    <Dialog>
      <form onSubmit={formik.handleSubmit}>
        <DialogTrigger asChild>
          <Button>作成</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>作成</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="title">タイトル</Label>
              <Input
                type="text"
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="description">説明</Label>
              <Input
                type="text"
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="slug">スラッグ</Label>
              <Input
                type="text"
                name="slug"
                value={formik.values.slug}
                onChange={formik.handleChange}
              />
            </div>
            <div className="grid gap-3">
              {/* <Turnstile
                siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY as string}
                theme="auto"
                onVerify={token => {
                  setToken(token);
                }}
              /> */}
            </div>
          </div>
          <Button type="submit">作成</Button>
        </DialogContent>
      </form>
    </Dialog>
  );
}
