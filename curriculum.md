---
title: 学习路径
description: 17 个开源项目串成的一条 Java × AI 进阶路线：从工程地基到生产级 AI 工程
---

# Java × AI 进阶学习路径

> 这不是一份"框架清单"，而是一条**有先后依赖关系的工程能力路线**。
> 17 个项目按"能读懂 → 能改动 → 能设计"三级递进排列，每个项目都有可运行代码、配套课件与验收标准。

<div class="path-meta">

**总课时** 约 138 小时 ｜ **项目** 17 个 ｜ **技术基线** Java 21 · Spring Boot 4.1.1 / 3.5.16 · Quarkus 3.40.1 · Spring AI 2.0.1 / 1.1.8

</div>

## 路线总览

| 阶段 | 主题 | 项目 | 建议投入 | 学完你能做什么 |
|:---:|:---|:---|:---:|:---|
| **0** | 工程地基 | Hutool 高级用法、MyBatis-Plus 从零到原理 | 12h | 写出符合生产规范的 CRUD 与工具层代码 |
| **1** | 架构、缓存与资金安全 | DDD 架构、微服务、Spring 高阶、Quarkus、Redis 高并发、支付对接 | 52h | 独立设计分层架构、拆服务、治理缓存与限流、处理幂等与对账 |
| **2** | AI 应用工程入门 | Spring AI、Spring AI Alibaba、Semantic Kernel、AgentScope | 40h | 用四种框架搭出可用的 AI 应用 |
| **3** | 图编排与可恢复工作流 | SAA Graph、LangGraph4j、Agent 编排 | 32h | 设计可中断、可恢复、可审计的 Agent 流程 |
| **4** | 生产级 AI 工程 | RAG 高阶优化、AI 平台中台 | 24h | 做检索质量评估与企业级 AI 网关 |

::: tip 怎么用这条路线
按阶段顺序走，**不要跳阶段**。每个项目完成"三件事"再进入下一站：跑通全部 Demo → 读完 `docs` 全部课件 → 改一个属于自己的需求。
:::

---

## 阶段 0 · 工程地基

**目标**：把"能跑"的代码提升到"能维护"的代码。这一阶段不讲 AI，但后面每个 AI 项目都依赖它。

### 0.1 Hutool 高级用法

- **课件**：[hutool-advanced-demo](https://ibqy.github.io/hutool-advanced-demo/) ｜ **源码**：[GitHub](https://github.com/ibqy/hutool-advanced-demo)
- **核心内容**：HTTP 客户端选型、两级缓存、Cron 表达式、JWT 刷新、AOP 代理、Excel 大数据量导出、树结构构建
- **高阶点**：不是"API 速查"，而是每个模块都给出**生产选型对比**与踩坑记录
- **验收**：能说清 `Cache` 的两种实现何时该用哪种、JWT 无感刷新如何避免并发重放

### 0.2 MyBatis-Plus 从零到原理

- **课件**：[mybatis-plus-demo](https://ibqy.github.io/mybatis-plus-demo/) ｜ **源码**：[GitHub](https://github.com/ibqy/mybatis-plus-demo)
- **核心内容**：实体映射、通用 CRUD、Lambda 查询、事务边界、自定义 XML、代码生成器、`BaseMapper` 动态代理原理
- **高阶点**：从"会用注解"走到"知道 SQL 是怎么被拼出来的"
- **验收**：能解释分页插件为什么需要显式引入 jsqlparser，能手写一个自定义 SQL 注入器

---

## 阶段 1 · 架构、缓存与资金安全

**目标**：从"写接口"升级到"划分边界、设计状态、保障一致性，并让系统在高并发下仍然可控"。

### 1.1 DDD 领域驱动设计

- **课件**：[ddd-arch-demo](https://ibqy.github.io/ddd-arch-demo/) ｜ **源码**：[GitHub](https://github.com/ibqy/ddd-arch-demo)
- **核心内容**：四层架构、聚合根与值对象、领域事件、仓储倒置、Spring Modulith 模块化单体对照
- **高阶点**：`domain` 层零 Spring 依赖；同一业务给出"分层"与"模块化"两套组织方式
- **验收**：能画出订单聚合的边界，说清哪些逻辑必须放在聚合内、哪些该进领域服务

### 1.2 Spring Cloud 微服务

- **课件**：[spring-cloud-micro-demo](https://ibqy.github.io/spring-cloud-micro-demo/) ｜ **源码**：[GitHub](https://github.com/ibqy/spring-cloud-micro-demo)
- **核心内容**：Gateway 路由与限流、OpenFeign 声明式调用、Resilience4j 熔断降级、服务间契约设计
- **高阶点**：降级不是 try-catch，而是**熔断器状态机 + fallback 签名约束**
- **验收**：能手工触发熔断并观察降级响应，能说清超时/异常/熔断三种触发路径的区别

### 1.3 Spring Boot 高阶特性

- **课件**：[spring-advanced-demo](https://ibqy.github.io/spring-advanced-demo/) ｜ **源码**：[GitHub](https://github.com/ibqy/spring-advanced-demo)
- **核心内容**：gRPC 自动配置、HTTP Interface Client、虚拟线程、AOT / Native Image、可观测性、MVC 与 Data JPA 进阶、事件驱动、Security 6
- **高阶点**：全部基于 Spring Boot 4.1 + Framework 7.0，覆盖 Boot 4 的 AOP starter 移除等迁移坑
- **验收**：能用虚拟线程改造阻塞调用并给出压测对比，能打出 native image

### 1.4 Quarkus 云原生运行时

- **课件**：[quarkus-teaching-demo](https://ibqy.github.io/quarkus-teaching-demo/) ｜ **源码**：[GitHub](https://github.com/ibqy/quarkus-teaching-demo)
- **核心内容**：12 课 —— 构建期增强与闭世界假设、ArC 依赖注入、Jakarta REST 与校验、三类配置、Panache、事务与 CDI 事件、三种线程模型、调度与容错、可观测性、Native Image 反射、压测
- **高阶点**：与 1.3 对照学习——同一件事在"运行时反射"与"构建期生成"两套假设下的不同解法；`@Retry` 与 `@Timeout` 的嵌套顺序经实测验证
- **验收**：能说清哪些工作被搬到了构建期、代价是什么，能解释 `Instance` 为什么必须配 `@Any`

### 1.5 Redis 与高并发

- **课件**：[redis-advanced-demo](https://ibqy.github.io/redis-advanced-demo/) ｜ **源码**：[GitHub](https://github.com/ibqy/redis-advanced-demo)
- **核心内容**：缓存三大问题（布隆过滤 + 空值缓存、互斥重建 vs 逻辑过期、TTL 抖动）、四种写策略的时序推演、分布式锁的四个坑、四种限流算法、热点 key 探测与两级缓存、语义缓存
- **高阶点**：每个结论都对应一个可复现的接口与 64 个测试；默认 memory 后端，`mvn verify` 完全离线
- **验收**：能复现「误删他人锁」与「固定窗口边界双倍」，能说清延迟双删的成立条件与 L1 缓存的一致性代价

### 1.6 支付对接实战

- **课件**：[pay-teaching-demo](https://ibqy.github.io/pay-teaching-demo/) ｜ **源码**：[GitHub](https://github.com/ibqy/pay-teaching-demo)
- **核心内容**：统一支付接口与策略工厂、渠道路由引擎、状态机守卫、幂等切面、异步通知验签、事件驱动 + 死信队列、对账引擎
- **高阶点**：资金类系统的三件套——**幂等、状态机、对账**，全部有可运行实现
- **验收**：能说清"通知先于下单"如何处理，能解释为什么快照/回调必须落库而非只走内存

---

## 阶段 2 · AI 应用工程入门

**目标**：掌握 Java 生态四大 AI 框架，能独立搭出可用的 AI 应用。

### 2.1 Spring AI 主线（建议第一站）

- **课件**：[spring-ai-teaching-demo](https://ibqy.github.io/spring-ai-teaching-demo/) ｜ **源码**：[GitHub](https://github.com/ibqy/spring-ai-teaching-demo)
- **核心内容**：21 个渐进式 Demo —— ChatClient、流式、结构化输出、Prompt 模板、工具调用、会话记忆、RAG、ETL、Advisor、Agent Skills、MCP 客户端与服务端、多模态、A2A、Token 可观测
- **高阶点**：从单轮对话一路走到"工具 + 技能 + 知识库 + MCP"的电商售后助手
- **验收**：能自己接一个 MCP Server，能写一个统计 Token 成本的 Advisor

### 2.2 Spring AI Alibaba（通义千问生态）

- **课件**：[spring-ai-alibaba-teaching-demo](https://ibqy.github.io/spring-ai-alibaba-teaching-demo/) ｜ **源码**：[GitHub](https://github.com/ibqy/spring-ai-alibaba-teaching-demo)
- **核心内容**：DashScope 接入、对话记忆、RAG、工具调用、多智能体、综合客服实战、MCP 与 A2A、Token 计量
- **高阶点**：与 2.1 对照学习——同一套能力在不同抽象下的写法差异
- **验收**：能把 2.1 的一个 Demo 用 SAA 重写一遍

### 2.3 Semantic Kernel for Java（跨框架对照）

- **课件**：[semantic-kernel-java-teaching-demo](https://ibqy.github.io/semantic-kernel-java-teaching-demo/) ｜ **源码**：[GitHub](https://github.com/ibqy/semantic-kernel-java-teaching-demo)
- **核心内容**：Kernel 构建、Plugin 插件、ChatHistory、Agentic 模式、RAG
- **高阶点**：理解"函数即插件"的设计哲学，以及 SK for Java 与 Spring AI 的生态差异
- **验收**：能写一个自定义 Plugin 并让模型自主选择调用

### 2.4 AgentScope for Java（多智能体）

- **课件**：[agentscope-java-teaching-demo](https://ibqy.github.io/agentscope-java-teaching-demo/) ｜ **源码**：[GitHub](https://github.com/ibqy/agentscope-java-teaching-demo)
- **核心内容**：Hello Agent、模型接入、流式、工具调用、多智能体协作、记忆与工作区、Prompt 模板、全能助理、MCP、A2A、Plan 模式与权限、事件可观测
- **高阶点**：多智能体协作的消息流与权限边界
- **验收**：能搭出两个 Agent 分工完成一个复合任务

---

## 阶段 3 · 图编排与可恢复工作流

**目标**：让 AI 流程**可中断、可恢复、可审计**——这是"玩具 Demo"与"生产系统"的分水岭。

### 3.1 Spring AI Alibaba Graph

- **课件**：[spring-ai-alibaba-graph-demo](https://ibqy.github.io/spring-ai-alibaba-graph-demo/) ｜ **源码**：[GitHub](https://github.com/ibqy/spring-ai-alibaba-graph-demo)
- **核心内容**：18 课 —— 状态、顺序、路由、循环、并行、子图、检查点、隔离、人工审批、流式、模型节点、重试、幂等、可观测，最后落到工单 / 报销 / 研报三个业务闭环
- **高阶点**：检查点持久化 + 人工审批 + 幂等冲突处理
- **验收**：能设计一个带人工审批的审批流，服务重启后从检查点继续

### 3.2 LangGraph4j（原生图编排）

- **课件**：[langgraph4j-teaching-demo](https://ibqy.github.io/langgraph4j-teaching-demo/) ｜ **源码**：[GitHub](https://github.com/ibqy/langgraph4j-teaching-demo)
- **核心内容**：与 3.1 同构的 18 课，但走 LangGraph4j 原生 API，附与 SAA Graph 的逐项对照
- **高阶点**：同一问题的两种图引擎实现，帮助你抽象出"图编排"的通用心智模型
- **验收**：能把 3.1 的一个图用 LangGraph4j 重画一遍

### 3.3 复杂 Agent 编排系统

- **课件**：[agent-orchestration-demo](https://ibqy.github.io/agent-orchestration-demo/) ｜ **源码**：[GitHub](https://github.com/ibqy/agent-orchestration-demo)
- **核心内容**：推理模式、多 Agent 架构、状态机与断点续跑、分层记忆、工具体系、熔断防护、MCP 与 A2A、流式与 HITL
- **高阶点**：**任务快照 + 状态机 = 服务重启任务不丢**；HITL 的审批单登记时序
- **验收**：能说清快照字段为什么是"反推"出来的，能复现一次断点续跑

---

## 阶段 4 · 生产级 AI 工程

**目标**：从"功能可用"走到"质量可度量、成本可控制"。

### 4.1 RAG 高阶优化

- **课件**：[rag-hybrid-search-demo](https://ibqy.github.io/rag-hybrid-search-demo/) ｜ **源码**：[GitHub](https://github.com/ibqy/rag-hybrid-search-demo)
- **核心内容**：文档预处理、高级分块、多路混合检索 + RRF、Rerank 与上下文组装、幻觉抑制、向量库运维与增量更新、RAG 评估体系（Recall@K / MRR / nDCG）
- **高阶点**：**检索质量必须被度量**，否则优化都是猜
- **验收**：能跑出一次评估报告，并用它证明某次优化真的有效

### 4.2 企业级 AI 平台

- **课件**：[ai-platform-demo](https://ibqy.github.io/ai-platform-demo/) ｜ **源码**：[GitHub](https://github.com/ibqy/ai-platform-demo)
- **核心内容**：模型管理、多租户、AI 网关（14 步管道）、多级缓存、异步任务、Prompt 平台、安全层、可观测与计量
- **高阶点**：按成本 / 性能 / 质量三维路由；网关管道顺序本身就是设计决策
- **验收**：能画出一次请求穿过网关的完整链路，并说明每步失败如何降级

---

## 能力矩阵

| 能力 | 阶段 0 | 阶段 1 | 阶段 2 | 阶段 3 | 阶段 4 |
|:---|:---:|:---:|:---:|:---:|:---:|
| 工程规范与工具链 | ●●● | ●● | ● | ● | ● |
| 分层与领域建模 | | ●●● | ● | ●● | ●● |
| 分布式与容错 | | ●●● | ● | ●●● | ●●● |
| 缓存与高并发 | | ●●● | ● | ● | ●● |
| 提示词与工具调用 | | | ●●● | ●●● | ●● |
| 状态与流程编排 | | ● | ● | ●●● | ●● |
| 检索与评估 | | | ●● | ● | ●●● |
| 成本与可观测 | | ● | ●● | ●● | ●●● |

---

## 推荐节奏

| 方案 | 周期 | 安排 |
|:---|:---|:---|
| **速通** | 4 周 | 阶段 0 选 1 个项目 → 阶段 1 走 DDD + Redis → 阶段 2 走 Spring AI → 阶段 4 走 RAG |
| **标准** | 8 周 | 每阶段 2 周，阶段内项目全做，验收标准逐条过 |
| **深耕** | 12 周 | 每阶段 3 周，额外完成"改造任务"：给每个项目加一个自选特性并补测试 |

## 常见问题

**Q：没有 AI 基础，能直接从阶段 2 开始吗？**
可以，但至少要完成阶段 0 的 MyBatis-Plus。阶段 1 的 DDD、Redis 与支付会决定你能否写出"能上线"的 AI 应用。

**Q：Spring AI 和 LangChain4j / Semantic Kernel 该学哪个？**
先学 Spring AI 建立主线，再用 Semantic Kernel 做对照。框架会变，**工具调用、RAG、状态编排**这三件事不会变。

**Q：两个图编排项目（3.1 / 3.2）需要都学吗？**
建议都学。它们的 API 不同但模型一致，对照学习能让你脱离具体框架思考。

**Q：课件在哪里？**
每个项目都部署了独立文档站（上表链接），仓库内 `docs/` 为同一份 Markdown 源文件，可离线阅读。

---

<p align="center">
  <a href="/">← 返回首页</a> ｜ <a href="https://github.com/ibqy">GitHub</a>
</p>
