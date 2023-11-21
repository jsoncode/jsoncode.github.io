---
title: Win10_Chrome出现ERR_EMPTY_RESPONSE错误怎么解决
date: '2020/11/20 10:52:11'
update: '2020/11/20 11:04:17'
categories: windows
tags: windows
---



![image.png](/images/Win10_Chrome出现ERR_EMPTY_RESPONSE错误怎么解决/1605840919643-bd260990-1f6f-4e65-918b-ab0ece9a9e66.png)
**1、检查您的网络连接是否正常**
错误ERR_EMPTY_RESPONSE通常不会与故障网络相关联，但是当涉及到疯狂的软件时，任何事情都是可能的。 因此，我们建议您检查您的互联网连接，以确保在采取其他严厉措施之前一切都达到了标准。

**2、糟糕的DNS？ 重置网络**
管理员身份打开cmd
![image.png](/images/Win10_Chrome出现ERR_EMPTY_RESPONSE错误怎么解决/1605841067998-f14b6fc7-9e22-4d99-9ed5-71363ef7de8e.png)
分别执行以下命令：最后，重新启动计算机，然后再次使用Google Chrome。
```shell
ipconfig /release
ipconfig /all
ipconfig /flushdns
ipconfig /renew
netsh int ip set dns
netsh winsock reset
```

![image.png](/images/Win10_Chrome出现ERR_EMPTY_RESPONSE错误怎么解决/1605841136667-9cbf377f-7ddf-4723-9d04-cf48222bf534.png)

3、清除Chrome浏览器的浏览数据
只要您的浏览数据暂时没有被清除，浏览器就会出现问题。 为帮助解决此ERR_EMPTY_RESPONSE错误，我们希望引导您清除网络浏览数据。
按键盘上的Ctrl，Shift和Delete，这将启动清除浏览数据。

![image.png](/images/Win10_Chrome出现ERR_EMPTY_RESPONSE错误怎么解决/1605841239264-9ff2f6a4-5f7f-46e4-ae27-1a8a8f9f74ae.png)

![image.png](/images/Win10_Chrome出现ERR_EMPTY_RESPONSE错误怎么解决/1605841310145-03869efc-59a4-4a6e-9207-479e8c452f78.png)

将时间范围设置为All time，勾选所有框，然后单击“清除数据”按钮。
重新启动您的Google Chrome网络浏览器，检查一切是否正常运行。

