---
layout: post
title: More
---

## CI/CD

[![pre-commit.ci status](https://results.pre-commit.ci/badge/github/ustc-ivclab/ustc-ivclab.github.io/main.svg)](https://results.pre-commit.ci/latest/github/ustc-ivclab/ustc-ivclab.github.io/main)
[![github/workflow](https://github.com/ustc-ivclab/ustc-ivclab.github.io/actions/workflows/main.yml/badge.svg)](https://github.com/ustc-ivclab/ustc-ivclab.github.io/actions)

If you find CI/CD failed, please:

- report the [bug](https://github.com/ustc-ivclab/ustc-ivclab.github.io/issues).
- give us a [PR](https://github.com/ustc-ivclab/ustc-ivclab.github.io/pulls).

## Information

[![github/downloads](https://shields.io/github/downloads/ustc-ivclab/ustc-ivclab.github.io/total)](https://github.com/ustc-ivclab/ustc-ivclab.github.io/releases)
[![github/downloads/latest](https://shields.io/github/downloads/ustc-ivclab/ustc-ivclab.github.io/latest/total)](https://github.com/ustc-ivclab/ustc-ivclab.github.io/releases/latest)
[![github/issues](https://shields.io/github/issues/ustc-ivclab/ustc-ivclab.github.io)](https://github.com/ustc-ivclab/ustc-ivclab.github.io/issues)
[![github/issues-closed](https://shields.io/github/issues-closed/ustc-ivclab/ustc-ivclab.github.io)](https://github.com/ustc-ivclab/ustc-ivclab.github.io/issues?q=is%3Aissue+is%3Aclosed)
[![github/issues-pr](https://shields.io/github/issues-pr/ustc-ivclab/ustc-ivclab.github.io)](https://github.com/ustc-ivclab/ustc-ivclab.github.io/pulls)
[![github/issues-pr-closed](https://shields.io/github/issues-pr-closed/ustc-ivclab/ustc-ivclab.github.io)](https://github.com/ustc-ivclab/ustc-ivclab.github.io/pulls?q=is%3Apr+is%3Aclosed)
[![github/discussions](https://shields.io/github/discussions/ustc-ivclab/ustc-ivclab.github.io)](https://github.com/ustc-ivclab/ustc-ivclab.github.io/discussions)
[![github/milestones](https://shields.io/github/milestones/all/ustc-ivclab/ustc-ivclab.github.io)](https://github.com/ustc-ivclab/ustc-ivclab.github.io/milestones)
[![github/forks](https://shields.io/github/forks/ustc-ivclab/ustc-ivclab.github.io)](https://github.com/ustc-ivclab/ustc-ivclab.github.io/network/members)
[![github/stars](https://shields.io/github/stars/ustc-ivclab/ustc-ivclab.github.io)](https://github.com/ustc-ivclab/ustc-ivclab.github.io/stargazers)
[![github/watchers](https://shields.io/github/watchers/ustc-ivclab/ustc-ivclab.github.io)](https://github.com/ustc-ivclab/ustc-ivclab.github.io/watchers)
[![github/contributors](https://shields.io/github/contributors/ustc-ivclab/ustc-ivclab.github.io)](https://github.com/ustc-ivclab/ustc-ivclab.github.io/graphs/contributors)
[![github/commit-activity](https://shields.io/github/commit-activity/w/ustc-ivclab/ustc-ivclab.github.io)](https://github.com/ustc-ivclab/ustc-ivclab.github.io/graphs/commit-activity)
[![github/last-commit](https://shields.io/github/last-commit/ustc-ivclab/ustc-ivclab.github.io)](https://github.com/ustc-ivclab/ustc-ivclab.github.io/commits)
[![github/release-date](https://shields.io/github/release-date/ustc-ivclab/ustc-ivclab.github.io)](https://github.com/ustc-ivclab/ustc-ivclab.github.io/releases/latest)

[![github/license](https://shields.io/github/license/ustc-ivclab/ustc-ivclab.github.io)](https://github.com/ustc-ivclab/ustc-ivclab.github.io/blob/master/LICENSE)
![github/languages](https://shields.io/github/languages/count/ustc-ivclab/ustc-ivclab.github.io)
![github/languages/top](https://shields.io/github/languages/top/ustc-ivclab/ustc-ivclab.github.io)
![github/directory-file-count](https://shields.io/github/directory-file-count/ustc-ivclab/ustc-ivclab.github.io)
![github/code-size](https://shields.io/github/languages/code-size/ustc-ivclab/ustc-ivclab.github.io)
![github/repo-size](https://shields.io/github/repo-size/ustc-ivclab/ustc-ivclab.github.io)
![github/v](https://shields.io/github/v/release/ustc-ivclab/ustc-ivclab.github.io)

You can use the website as your website
[template](https://github.com/ustc-ivclab/ustc-ivclab.github.io/generate).

## Maintain

### How to build this website

For windows:

1. Download [msys2](https://github.com/msys2/msys2-installer/releases)
2. Install some needed programs

```sh
pacman -S pactoys
pacboy -S gcc:x ruby:x libxslt:x
gem install nokogiri -- --use-system-libraries
bundle config set --local path .bundle
bundle install
bundle exec jekyll s
```

Open <https://localhost:4000>.

For other systems, See <https://jekyllrb.com/docs/installation>

## Develop

```sh
pip install pre-commit
pre-commit install
git commit
```

### New people join us

1. Add their github account to [our organization](https://github.com/ustc-ivclab)
2. Create `_posts/people/(student|faculty|alumni)/YYYY-MM-DD-last-name-first_name.md`

```markdown
---
category: people
tags:
  - robot
---

## Photo

![profile](https://avatars.githubusercontent.com/u/116997363)

## Information

- Chinese name: 智能视频编码实验室
- English name: IVCLab
- Homepage: <https://ustc-ivclab.github.io>
- Scholar: <https://scholar.google.com/citations?user=ivclab>
```

Notes:

- `YYYY-MM-DD` is the date the person joins us.
- The image link of the profile must be an external URL to save our store space.
- Some items can be emitted.
- Not recommend to add email because it can be achieve by spider easily.
  Insteadly, email should be added to their homepage.

#### Priority of homepage

In conclusion, we can fill `homepage` to every one's page by the following
order.

##### Personal blog which can control all mostly

- [github page](https://pages.github.com): <https://ustc-ivclab.github.io>
- [gitlab page](https://docs.gitlab.com/ee/user/project/pages)
- [gitee page](https://gitee.com/help/articles/4136)

##### Personal blog which can only control the content

- [zhihu](https://www.zhihu.com)
- [bilibili](https://www.bilibili.com)
- [qzone](https://qzone.qq.com)
- [CSDN](https://www.csdn.net)
- [cnblog](https://www.cnblogs.com)
- [jianshu](https://www.jianshu.com)

##### Any social website which can upload file/video or comment

- [Github profile](https://github.com): <https://github.com/ustc-ivclab>
- [Gitlab profile](https://gitlab.com)
- [Gitee profile](https://gitee.com)

### New event happens

Create `_posts/news/(academic|entertainment|publication|service|community)/YYYY-MM-DD-event_name.md`

```markdown
---
tags:
  - publication
  - other tag
---

## Information

- [Accepted](https://ieeexplore.ieee.org/document/X) by
  [IEEE X](https://example.com)
- [Code](https://github.com/ustc-ivclab/X)

## Authors

- [IVCLab](/people/2020/09/01/ivclab)
```

Notes:

- `YYYY-MM-DD` is the date the news happens.
- The image link of the profile must be an external URL to save our store space.
- Any item cannot be emitted.

## Todo

- [ ] Change `--` of post filename to `-` of post title, such as: change
  `2022-03-01-end--to--end-optimized-versatile-image-compression-with-wavelet-like-transform.md`
  to `End-to-end Optimized Versatile Image Compression With Wavelet Like Transform`
- [ ] Generate
  [list](/2020/09/27/a-list-of-publications-of-learning-based-image-and-video-compression)
  automatically from bib
- [x] Add easter eggs -- Right, you know the fact that them exist.
  Find them :egg:!
